/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let arr = []
  for (let i = 0; i < s.length; i++) {
      const t = s[i]
      const l = arr[arr.length - 1]
      if (( l === '(' && t === ')')
        || (l === '[' && t === ']')
        || (l === '{' && t === '}')
      ) {
          arr.pop()
      } else {
          arr.push(t)
      }
  }
  return arr.length === 0
};
// @lc code=end

console.log(isValid('()'));
