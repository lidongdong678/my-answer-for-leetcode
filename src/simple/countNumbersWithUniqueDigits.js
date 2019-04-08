// 题目：
//    给定一个非负整数 n，计算各位数字都不同的数字 x 的个数，其中 0 ≤ x < 10n 。
// 示例:
//    输入: 2
//    输出: 91
//    解释: 答案应为除去 11,22,33,44,55,66,77,88,99 外，在 [0,100) 区间内的所有数字。

/**
 * @param {number} n
 * @return {number}
 */
function countNumbersWithUniqueDigits(n) {
  if (n === 0) return 1;
  if (n === 1) return 10;

  let res = 0;
  for(let i = 0; i <= n; i++) {
    res += getUniqueNum(i);
  }
  return res;
}

/**
 * n位数中不相同的数的个数
 * 0 -> 0
 * 1 -> 0
 * 2 -> 9  ,分别为11,22,33,44,55,66,77,88,99
 * */
function getUniqueNum(n) {
  if (n >= 10) return 0;
  if (n === 0) return 1;

  let res = 9;
  let base = 9;

  for(let i = 1; i < n; i++) {
    res *= base;
    base--;
  }

  return res;
}

function test(n) {
  const start = new Date().getTime();
  const result = countNumbersWithUniqueDigits(n);
  const end = new Date().getTime();
  const during = end - start;

  console.log(`输入：${n} ；输出：${result} ；耗时：${during}ms`);

}

function sss(n) {
  switch (n) {
    case 0:
      return 1;
    case 1:
      return 10;
    case 2:
      return 91;
    case 3:
      return 739;
    case 4:
      return 5275;
    case 5:
      return 32491;
    case 6:
      return 168571;
    case 7:
      return 712891;
    case 8:
      return 2345851;
    default:
      return 5611771;
  }

}

test(0);
test(1);
test(2);
test(3);
test(4);
test(5);
test(6);
test(7);
test(8);
test(9);
test(10);
test(11);