/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  // 进位
  let flag = 0
  let i = num1.length - 1
  let j = num2.length - 1
  let res = ''
  while (i >= 0 || j >= 0) {
    let val = parseInt(num1[i] || '0') + parseInt(num2[j] || '0') + flag
    flag = Math.floor(val / 10)
    val = val % 10
    res = `${val}${res}`
    i--
    j--
  }
  if (flag) {
    res = `1${res}`
  }
  return res
};
// @lc code=end

