/*
 * @lc app=leetcode.cn id=1668 lang=javascript
 *
 * [1668] 最大重复子字符串
 *
 * https://leetcode.cn/problems/maximum-repeating-substring/description/
 *
 * algorithms
 * Easy (44.37%)
 * Likes:    58
 * Dislikes: 0
 * Total Accepted:    17.1K
 * Total Submissions: 36.8K
 * Testcase Example:  '"ababc"\n"ab"'
 *
 * 给你一个字符串 sequence ，如果字符串 word 连续重复 k 次形成的字符串是 sequence 的一个子字符串，那么单词 word 的
 * 重复值为 k 。单词 word 的 最大重复值 是单词 word 在 sequence 中最大的重复值。如果 word 不是 sequence
 * 的子串，那么重复值 k 为 0 。
 * 
 * 给你一个字符串 sequence 和 word ，请你返回 最大重复值 k 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：sequence = "ababc", word = "ab"
 * 输出：2
 * 解释："abab" 是 "ababc" 的子字符串。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：sequence = "ababc", word = "ba"
 * 输出：1
 * 解释："ba" 是 "ababc" 的子字符串，但 "baba" 不是 "ababc" 的子字符串。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：sequence = "ababc", word = "ac"
 * 输出：0
 * 解释："ac" 不是 "ababc" 的子字符串。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 1 
 * sequence 和 word 都只包含小写英文字母。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
  let k = 0
  let t = 0
  const len = word.length
  for (let i = 0; i < sequence.length;) {
      if (sequence.slice(i, i + len) === word) {
          t++
          k = Math.max(k , t)
          i += len
      } else {
          t = 0
          i++
      }
  }

  return k
};
// @lc code=end

const s = 'aaabaaaabaaabaaaabaaaabaaaabaaaaba'
const sa = 'aaaba,aaaba,aaba,aaaba,aaaba,aaaba,aaaba'
const w = 'aaaba'
maxRepeating(s, w)

