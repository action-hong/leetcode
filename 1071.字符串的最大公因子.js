/*
 * @lc app=leetcode.cn id=1071 lang=javascript
 *
 * [1071] 字符串的最大公因子
 *
 * https://leetcode.cn/problems/greatest-common-divisor-of-strings/description/
 *
 * algorithms
 * Easy (58.56%)
 * Likes:    285
 * Dislikes: 0
 * Total Accepted:    45.1K
 * Total Submissions: 77K
 * Testcase Example:  '"ABCABC"\n"ABC"'
 *
 * 对于字符串 s 和 t，只有在 s = t + ... + t（t 自身连接 1 次或多次）时，我们才认定 “t 能除尽 s”。
 * 
 * 给定两个字符串 str1 和 str2 。返回 最长字符串 x，要求满足 x 能除尽 str1 且 x 能除尽 str2 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：str1 = "ABCABC", str2 = "ABC"
 * 输出："ABC"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：str1 = "ABABAB", str2 = "ABAB"
 * 输出："AB"
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：str1 = "LEET", str2 = "CODE"
 * 输出：""
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= str1.length, str2.length <= 1000
 * str1 和 str2 由大写英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  const m = str1.length
  const n = str2.length
  let i = str2.length

  label:
  while (i > 0) {
    if (m % i !== 0 || n % i !== 0) {
      i--
    } else {

      // str2 可以整除
      for (let k = 0; k < n; k += i) {
        if (str2.slice(0, i) !== str2.slice(k, k + i)) {
          i--
          continue label
        }
      }
      // str1 可以整除
      for (let k = 0; k < m; k += i) {
        if (str2.slice(0, i) !== str1.slice(k, k + i)) {
          i--
          continue label
        }
      }
      return str2.slice(0, i)
    }
  }

  return ''
};
// @lc code=end


let str1 = 'ababab'
let str2 = 'abab'
console.log(gcdOfStrings(str1, str2));