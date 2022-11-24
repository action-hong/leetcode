/*
 * @lc app=leetcode.cn id=878 lang=javascript
 *
 * [878] 第 N 个神奇数字
 *
 * https://leetcode.cn/problems/nth-magical-number/description/
 *
 * algorithms
 * Hard (29.67%)
 * Likes:    139
 * Dislikes: 0
 * Total Accepted:    9.3K
 * Total Submissions: 26.7K
 * Testcase Example:  '1\n2\n3'
 *
 * 一个正整数如果能被 a 或 b 整除，那么它是神奇的。
 * 
 * 给定三个整数 n , a , b ，返回第 n 个神奇的数字。因为答案可能很大，所以返回答案 对 10^9 + 7 取模 后的值。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 1, a = 2, b = 3
 * 输出：2
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 4, a = 2, b = 3
 * 输出：6
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 10^9
 * 2 <= a, b <= 4 * 10^4
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var nthMagicalNumber = function (n, a, b) {
  if (a === b) {
    return a * n % 1_000_000_007
  }
  const c = {
    [a]: true,
    [b]: true
  }
  let ans
  let ai = 2
  let bi = 2
  let aa = a
  let ab = b
  while (n > 0) {
    if (aa < ab) {
      ans = aa
      while (true) {
        aa = a * ai
        ai++
        if (!c[aa]) {
          c[aa] = true
          break
        }
      }
    } else {
      ans = ab
      while (true) {
        ab = b * bi
        bi++
        if (!c[ab]) {
          c[ab] = true
          break
        }
      }
    }
    n--
  }
  return ans % 1_000_000_007
}
// @lc code=end

const res = nthMagicalNumber(8, 8, 8)
console.log(res)
