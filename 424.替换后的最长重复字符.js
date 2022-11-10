/*
 * @lc app=leetcode.cn id=424 lang=javascript
 *
 * [424] 替换后的最长重复字符
 *
 * https://leetcode.cn/problems/longest-repeating-character-replacement/description/
 *
 * algorithms
 * Medium (53.93%)
 * Likes:    716
 * Dislikes: 0
 * Total Accepted:    79.8K
 * Total Submissions: 146.6K
 * Testcase Example:  '"ABAB"\n2'
 *
 * 给你一个字符串 s 和一个整数 k 。你可以选择字符串中的任一字符，并将其更改为任何其他大写英文字符。该操作最多可执行 k 次。
 * 
 * 在执行上述操作后，返回包含相同字母的最长子字符串的长度。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "ABAB", k = 2
 * 输出：4
 * 解释：用两个'A'替换为两个'B',反之亦然。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "AABABBA", k = 1
 * 输出：4
 * 解释：
 * 将中间的一个'A'替换为'B',字符串变为 "AABBBBA"。
 * 子串 "BBBB" 有最长重复字母, 答案为 4。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 10^5
 * s 仅由大写英文字母组成
 * 0 <= k <= s.length
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  const window = {}
  let left = 0
  let right = 0
  let ans = 0
  // 遍历中，区段内最多相同的字母长度
  let maxCount = 0
  while(right < s.length) {
      const c = s[right]
      if (window[c]) {
        window[c]++
      } else {
        window[c] = 1
      }
      right++
      maxCount = Math.max(maxCount, window[c])

      // 注意压缩left时，不需要缩小maxCount
      // 缩小maxCount后，计算出来的 right - left 大小必然比 之前的答案小(未缩小的maxCount + k的更大，right - left更大)
      // 

      while(right - left > maxCount + k) {
          // 不够用啦
          const l = s[left]
          left++
          window[l]--
      }

      ans = Math.max(ans, right - left)
  }

  return ans
};
// @lc code=end

const s = 'ABABA'
const k = 1

const res = characterReplacement(s, k)

console.log(res);


