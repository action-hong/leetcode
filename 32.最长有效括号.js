/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  // time o(n)
  // size o(n)
  const dp = Array.from(
    {
      length: s.length,
    },
    () => 0
  )
  let ans = 0
  for (let i = 1; i < s.length; i++) {
    if (s[i] === ')') {
      if (s[i - 1] === '(') {
        dp[i] = (dp[i - 2] || 0) + 2
      } else if (s[i - dp[i - 1] - 1] === '(') {
        dp[i] = (dp[i - 1] || 0) + 2 + (dp[i - dp[i - 1] - 2] || 0)
      }
    }
    ans = Math.max(dp[i], ans)
  }
  return ans
}
// @lc code=end

longestValidParentheses('()(())')
