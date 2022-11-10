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
  // 遍历中，某个区段内最多相同的字母长度
  // 最大子串长度必然是 = maxCount + k
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


      // 左边界向右时，无需更新maxCount，假设最长的字符时a
      // 1. 移出的是a，移入的也是a，则maxCount 保持不变
      // 2. 移出的是a, 移入的不是a, （right-left)要更长的话，必然maxCount 也不必缩小
      // 3. 移出的不是a，则起码 maxCount依旧是不会变
      // 而且 window也在维护，后续 再次有范围中a的范围更大更新maxCount, 已经排除掉了之前左边范围里的a了

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

const s = 'ABABAA'
const k = 1

const res = characterReplacement(s, k)

console.log(res);


