/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const max = Math.max(...height)
  let sum = 0
  for (let h = 1; h <= max; h++) {
      let temp = 0
      let flag = false
      for (let i = 0; i < height.length; i++) {
          if (flag && height[i] < h) {
            temp++
          } else if (height[i] >= h) {
            sum += temp
            temp = 0
            // 找到壁了
            flag = true
          }
      }
  }
  return sum
};
// @lc code=end

const arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

console.log(trap(arr));