/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  // dp[i][j] 表示 i -> j 是否为回文
  // 初始条件： dp[i][i] = true; dp[i][i + 1] = dp[i] === dp[i+1]
  // 转移 dp[i][j] = dp[i + 1][j - 1] && dp[i + 1] === dp[j - 1]
  let len = s.length
  if (len < 2) return s
  const dp = []
  for (let i = 0; i < len; i++) {
    dp[i] = []
    dp[i][i] = true
  }

  let max = 1
  let start = 0
  let end = 0

  // 长度从短到大转移
  // 从长度2开始
  for (let l = 2; l <= len; l++) {
    for (let i = 0; i < len; i++) {
      // 左边界为i
      // 计算右边界
      const j = i + l - 1
      // 越界
      if (j >= len) continue
      if (l === 2) {
        dp[i][j] = s[i] === s[j]
      } else {
        dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1]
      }

      if (dp[i][j]) {
        if (max < j - i + 1) {
          start = i
          end = j
          max = j - i + 1
        }
      }
    }
  }

  return s.substring(start, end + 1)
};
// @lc code=end

const cases = [
  // ['babad', 'bab'],
  // ['cbbd', 'bb']
  ['bb', 'bb']
]

cases.forEach(([input, expect]) => {
  const ans = longestPalindrome(input)
  console.log(ans === expect ? 'success' : 'fail in ' + input + ' get ' + ans + ' but expect for ' + expect)
})

