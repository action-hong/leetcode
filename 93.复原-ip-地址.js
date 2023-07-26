/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const res = []
  function test(val) {
    if (val.length === 1) return true
    if (val.startsWith('0')) return false
    val = parseInt(val)
    return val >= 0 && val <= 255
  }

  function iter(temp = [], first = 0) {
    if (temp.length === 4) {
      if (s.length === first) {
        res.push(temp.join('.'))
      }
    } else {
      for (let i = 1; i < 4; i++) {
        const end = first + i
        if (end > s.length) break
        const val = s.slice(first, end)
        if (test(val)) {
          temp.push(val)
          iter(temp, end)
          temp.pop()
        }
      }
    }
  }

  iter()

  return res
};
// @lc code=end

restoreIpAddresses('25525511135')
