// 10. 正则表达式匹配 https://leetcode-cn.com/problems/regular-expression-matching/

// 给定一个字符串 (s) 和一个字符模式 (p)。实现支持 '.' 和 '*' 的正则表达式匹配。
//
//     '.' 匹配任意单个字符。
//     '*' 匹配零个或多个前面的元素。
//     匹配应该覆盖整个字符串 (s) ，而不是部分字符串。

// 说明:
//       s 可能为空，且只包含从 a-z 的小写字母。
//       p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。
//       示例 1:

// 输入:
//       s = "aa"
//       p = "a"
//       输出: false
//       解释: "a" 无法匹配 "aa" 整个字符串。
//       示例 2:

// 输入:
//         s = "aa"
//         p = "a*"
//         输出: true
//         解释: '*' 代表可匹配零个或多个前面的元素, 即可以匹配 'a' 。因此, 重复 'a' 一次, 字符串可变为 "aa"。
//         示例 3:

// 输入:
//         s = "ab"
//         p = ".*"
//         输出: true
//         解释: ".*" 表示可匹配零个或多个('*')任意字符('.')。
//         示例 4:

// 输入:
//         s = "aab"
//         p = "c*a*b"
//         输出: true
//         解释: 'c' 可以不被重复, 'a' 可以被重复一次。因此可以匹配字符串 "aab"。
//         示例 5:

// 输入:
//         s = "mississippi"
//         p = "mis*is*p*."
//         输出: false


/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
function isMatch(s, p) {
  var sLen = s.length,
    pLen = p.length;
  var i = 0,
    j = 0,
    lastChar = '',
    sChar = '',
    pChar = '';

  for(i = 0; i < sLen; i++) {
    sChar = s[i];
    pChar = p[j];
    // 正常字符串 或者 .
    if (sChar === pChar || pChar === '.') {
      lastChar = pChar;
      j++;
      continue;
    }

    // * 匹配
    if (pChar === '*') {
      // todo 判断什么时候停止
      if (lastChar === '.') {
        continue;
      }

      // todo 相同字符串的 * 匹配
      if (lastChar === sChar) {
        continue;
      }


      j++;
      pChar = p[j];

      if (sChar === pChar || pChar === '.') {
        lastChar = pChar;
        j++;
        break;
      }
      return false;
    }


    // 不是特殊字符，并且不相等
    return false;
  }

  if (p[j] === '' || p[j] === '*') return false;
  return true;
}


/**
 * 测试
 */
function test(s, p) {
  const start = new Date().getTime();
  const result = isMatch(s, p);
  const end = new Date().getTime();
  const during = end - start;
  console.log(`输入数据: s = ${s}, p = ${p}, 输出：${result}， 耗时：${during}`);
}


// 运行测试
test('aa', 'a');   // 期望：false
test('aa', 'a*');   // 期望：true