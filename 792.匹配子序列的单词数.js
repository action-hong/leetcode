/*
 * @lc app=leetcode.cn id=792 lang=javascript
 *
 * [792] 匹配子序列的单词数
 *
 * https://leetcode.cn/problems/number-of-matching-subsequences/description/
 *
 * algorithms
 * Medium (47.07%)
 * Likes:    257
 * Dislikes: 0
 * Total Accepted:    17.1K
 * Total Submissions: 34.7K
 * Testcase Example:  '"abcde"\n["a","bb","acd","ace"]'
 *
 * 给定字符串 s 和字符串数组 words, 返回  words[i] 中是s的子序列的单词个数 。
 * 
 * 字符串的 子序列 是从原始字符串中生成的新字符串，可以从中删去一些字符(可以是none)，而不改变其余字符的相对顺序。
 * 
 * 
 * 例如， “ace” 是 “abcde” 的子序列。
 * 
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: s = "abcde", words = ["a","bb","acd","ace"]
 * 输出: 3
 * 解释: 有三个是 s 的子序列的单词: "a", "acd", "ace"。
 * 
 * 
 * Example 2:
 * 
 * 
 * 输入: s = "dsahjpjauf", words = ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"]
 * 输出: 2
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 <= s.length <= 5 * 10^4
 * 1 <= words.length <= 5000
 * 1 <= words[i].length <= 50
 * words[i]和 s 都只由小写字母组成。
 * 
 * ​​​​
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
// var numMatchingSubseq = function (s, words) {
//   const p = new Array(26).fill(0).map(() => new Array())
//   for (let i = 0; i < words.length; ++i) {
//     // [i,0]
//     // i表示这个是匹配第几个word
//     // 0 表示，当前匹配的是 words[i]的第0个字符
//     p[words[i][0].charCodeAt() - 'a'.charCodeAt()].push([i, 0])
//   }
//   let res = 0
//   for (let i = 0; i < s.length; ++i) {
//     const c = s[i]
//     let len = p[c.charCodeAt() - 'a'.charCodeAt()].length
//     while (len > 0) {
//       const t = p[c.charCodeAt() - 'a'.charCodeAt()].shift()
//       // 匹配完了，答案加1
//       if (t[1] === words[t[0]].length - 1) {
//         ++res
//       } else {
//         // 匹配下一个字符
//         ++t[1]
//         p[words[t[0]][t[1]].charCodeAt() - 'a'.charCodeAt()].push(t)
//       }
//       --len
//     }
//   }
//   return res
// }

var numMatchingSubseq = function (s, words) {
  const p = new Array(26).fill(0).map(() => [])
  for (let i = 0; i < words.length; i++) {
    p[getPos(words[i][0])].push([i, 0])
  }

  let res = 0
  for (let i = 0; i < s.length; i++) {
    const pos = getPos(s[i])
    const len = p[pos].length
    while (len > 0) {
      const t = p[pos].shift()
      // 匹配完了，答案加1
      if (t[1] === words[t[0]].length - 1) {
        res++
      } else {
        // 匹配到到word的下一个字符
        t[1]++
        p[
          getPos(words[t[0]][t[1]])
        ].push(t)
      }
      len--
    }
  }
  return res


}

/**
* @param {string} c
*/
function getPos(c) {
  return c.charCodeAt() - 'a'.charCodeAt()
}
// @lc code=end

const s = 'abcde'
const words = ["a", "bb", "acd", "ace"]

numMatchingSubseq(s, words)
