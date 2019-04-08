// 题目：
//      所有 DNA 由一系列缩写为 A，C，G 和 T 的核苷酸组成，例如：“ACGAATTCCG”。在研究 DNA 时，识别 DNA 中的重复序列有时会对研究非常有帮助。
//      编写一个函数来查找 DNA 分子中所有出现超多一次的10个字母长的序列（子串）。
// 示例：
//      输入： s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
//      输出: ["AAAAACCCCC", "CCCCCAAAAA"]


/**
 * @param {string} s 如: "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
 * @return {string[]}
 */
function findRepeatedDnaSequences(s) {
  const len = s.length, loop = len - 10;
  if (len <= 10) return [];


  let hashMap = {};
  for(let i = 0; i <= loop; i++) {
    let str = s.substr(i, 10);
    if (hashMap[str] !== undefined) {
      hashMap[str]++;
    } else {
      hashMap[str] = 0;
    }
  }

  let resArr = [];
  for(let key in hashMap) {
    if (hashMap.hasOwnProperty(key) && hashMap[key]) {
      resArr.push(key);
    }
  }
  return resArr;
}

/**
 * 测试代码
 * */
function test(s) {
  const start = new Date().getTime();

  // 执行结果
  const result = findRepeatedDnaSequences(s);

  const during = new Date().getTime() - start;
  console.log(`输入：${s}`, `结果：${result}`, `耗时：${during}`,);
}


// 运行测试
test('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT');