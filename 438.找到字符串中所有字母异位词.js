/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 *
 * https://leetcode.cn/problems/find-all-anagrams-in-a-string/description/
 *
 * algorithms
 * Medium (54.65%)
 * Likes:    1040
 * Dislikes: 0
 * Total Accepted:    242.3K
 * Total Submissions: 441.8K
 * Testcase Example:  '"cbaebabacd"\n"abc"'
 *
 * 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
 * 
 * 异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: s = "cbaebabacd", p = "abc"
 * 输出: [0,6]
 * 解释:
 * 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
 * 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: s = "abab", p = "ab"
 * 输出: [0,1,2]
 * 解释:
 * 起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
 * 起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
 * 起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 <= s.length, p.length <= 3 * 10^4
 * s 和 p 仅包含小写字母
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let left = 0
  let right = 0
  const need = {}
  const window = {}
  // 共有几种不同的字符
  let count = 0
  let valid = 0
  for (let i = 0; i < p.length; i++) {
    if (need[p[i]]) {
      need[p[i]]++
    } else {
      need[p[i]] = 1
      count++
    }
  }

  const ans = []

  while (right < s.length) {
    const c = s[right]
    if (need[c]) {
      if (window[c]) {
        window[c]++
      } else {
        window[c] = 1
      }
      if (window[c] === need[c]) {
        valid++
      }
    }
    right++

    while (right - left >= p.length) {
      if (valid === count) {
        ans.push(left)
      }
      const l = s[left]
      left++
      if (window[l]) {
        if (window[l] === need[l]) {
          valid--
        }
        window[l]--
      }
    }
  }
  return ans
}
// @lc code=end

const s = "cbaebabacd"
const p = "abc"

const ans = findAnagrams(s, p)
console.log(ans)