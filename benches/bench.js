import 'https://unpkg.com/lodash@4.17.11/lodash.js';
import 'https://unpkg.com/benchmark@2.1.4/benchmark.js';
import init, { acceptString } from '../pkg/wasm_bindgen_string_benches.js';

let logTarget = document.getElementById('log');

console.log = (prev => (...args) => {
	logTarget.append(args.join(' ') + '\n');
	return prev(...args);
})(console.log);

let suite = new Benchmark.Suite();

for (let s of [
  'ja',
  'aym0566x',
  '505874924095815681',
  'Sun Aug 31 00:29:15 +0000 2014',
  'https://pbs.twimg.com/profile_images/497760886795153410/LDjAwR_y_normal.jpeg',
  '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
  '@aym0566x \n\n名前:前田あゆみ\n第一印象:なんか怖っ！\n今の印象:とりあえずキモい。噛み合わない\n好きなところ:ぶすでキモいとこ😋✨✨\n思い出:んーーー、ありすぎ😊❤️\nLINE交換できる？:あぁ……ごめん✋\nトプ画をみて:照れますがな😘✨\n一言:お前は一生もんのダチ💖'
]) {
  suite.add(s, () => acceptString(s));
}

suite.on('error', ({ target }) => console.error(target.error));
suite.on('cycle', ({ target }) => console.log(String(target)));
suite.on('complete', () => console.log('Done'));

init('../pkg/wasm_bindgen_string_benches_bg.wasm').then(() => {
	console.log('Running...');
	suite.run({ async: true });
});
