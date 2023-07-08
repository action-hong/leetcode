/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (39.11%)
 * Likes:    9288
 * Dislikes: 0
 * Total Accepted:    2.4M
 * Total Submissions: 6.1M
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: s = "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: s = "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: s = "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= s.length <= 5 * 10^4
 * s 由英文字母、数字、符号和空格组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const charMapIndex = {}
  let lo = 0
  let hi = 0
  let max = 0

  function check() {
      max = Math.max(hi - lo, max)
  }

  while(hi < s.length) {
      const c = s[hi]
      const i = charMapIndex[c]
      if (i === undefined) {
          // 没有重复的
          charMapIndex[c] = hi
          hi++
          check()
      } else {
          // 已经有了
          // i和hi上的字母都一样了
          // 更新map
          for (let j = lo; j < i; j++) {
              charMapIndex[s[j]] = undefined
          }
          charMapIndex[c] = hi
          hi++
          lo = i + 1
      }
  }

  return max
};
// @lc code=end

const ans = lengthOfLongestSubstring('abcabcbb')
console.log(ans);
