import test from 'tape';
import lib from '../src/source.js';

test('Sum', t => {
  t.plan(2);
  t.equal(2, lib.sum(1, 1));
  setTimeout(() => {
    t.equal(1, lib.substract(3, 2));
  }, 3000);
});
// test.onFinish(() => {
// console.log(JSON.stringify(global.__coverage__));
// });
