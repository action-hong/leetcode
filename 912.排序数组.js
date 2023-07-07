/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  p(nums, 0, nums.length - 1)
  return nums
};

function p(nums, lo, hi) {
  if (lo >= hi) return
  const index = Math.floor(Math.random() * (hi - lo + 1)) + lo
  const pivot = nums[index]
  swap(nums, index, hi)
  let i = lo - 1
  for (let j = lo; j < hi; j++) {
      if (nums[j] <= pivot) {
          swap(nums, j, ++i)
      }
  }
  swap(nums, hi, i + 1)
  p(nums, lo, i)
  p(nums, i + 2, hi)
}

function swap(nums, a, b) {
  const temp = nums[a]
  nums[a] = nums[b]
  nums[b] = temp
}
// @lc code=end

