/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let lo = 0
  let hi = nums.length - 1
  while (lo <= hi) {
    const mid = Math.floor((hi - lo) / 2) + lo
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      lo = mid + 1
    } else {
      hi = mid - 1
    }
  }
  return -1
};
// @lc code=end

