/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = Number.NEGATIVE_INFINITY
  let t = 0
  for (let i = 0; i < nums.length; i++) {
      if (t < 0) {
          t = nums[i]
      } else {
          t += nums[i]
      }
      max = Math.max(t, max)
  }
  return max
};
// @lc code=end

const res = maxSubArray([-1])
