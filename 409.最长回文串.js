/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 *
 * https://leetcode.cn/problems/longest-palindrome/description/
 *
 * algorithms
 * Easy (55.64%)
 * Likes:    479
 * Dislikes: 0
 * Total Accepted:    152K
 * Total Submissions: 272.8K
 * Testcase Example:  '"abccccdd"'
 *
 * 给定一个包含大写字母和小写字母的字符串 s ，返回 通过这些字母构造成的 最长的回文串 。
 * 
 * 在构造过程中，请注意 区分大小写 。比如 "Aa" 不能当做一个回文字符串。
 * 
 * 
 * 
 * 示例 1: 
 * 
 * 
 * 输入:s = "abccccdd"
 * 输出:7
 * 解释:
 * 我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入:s = "a"
 * 输入:1
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 <= s.length <= 2000
 * s 只由小写 和/或 大写英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const obj = {}
  for (let i = 0; i < s.length; i++) {
      if (obj[s[i]]) {
          obj[s[i]]++
      } else {
          obj[s[i]] = 1
      }
  }
  let ans = 0
  Object.values(obj)
      .forEach((val) => {
          // 左右各 Math.floor(val / 2) 字符
          ans += Math.floor(val / 2) * 2

          // 回文可以是奇数长度，只有一个字符可有有奇数个
          if (ans % 2 === 0 && val % 2 === 1) {
              ans += 1
          }
      })

  return ans
};
// @lc code=end

