/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  // dp
  const n = word1.length
  const m = word2.length
  const dp = new Array(n + 1).fill(0).map(_ => [])
  // dp[i][j] 表示 word1.slice(0, i) => word2.slice(0, j) 需要的编辑距离
  // 转移方程
  // word1[i] === word2[j] 则 dp[i][j] = dp[i - 1][j - 1] (因为word1[i]和word2[j]一样，不用修改了)
  // word1[i] !== word2[j] 则 dp[i][j] = Math.min(dp[i-1][j-1], dp[i][j-1], dp[i - 1][j]) + 1
  // dp[i-1][j-1] 表示替换 word1[i]的值成word2[j]
  // dp[i][j-1] 表示增加word2[j]
  // dp[i-1][j] 表示删除word1[i]

  // 初始条件
  for (let i = 0; i <= n; i++) {
    // word1.slice(0, i) 变成 空字符串'' 需要i步，删除i个字符串即可
    dp[i][0] = i
  }

  for (let i = 0; i <= m; i++) {
    // 空字符串变成 word2.slice(0, i) 需要i步，照着加上i个字符即可
    dp[0][i] = i
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1
      }
    }
  }

  return dp[n][m]
};
// @lc code=end

