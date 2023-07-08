/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 *
 * https://leetcode.cn/problems/kth-largest-element-in-an-array/description/
 *
 * algorithms
 * Medium (63.66%)
 * Likes:    2211
 * Dislikes: 0
 * Total Accepted:    879.5K
 * Total Submissions: 1.4M
 * Testcase Example:  '[3,2,1,5,6,4]\n2'
 *
 * 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
 * 
 * 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 * 
 * 你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: [3,2,1,5,6,4], k = 2
 * 输出: 5
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: [3,2,3,1,2,4,5,5,6], k = 4
 * 输出: 4
 * 
 * 
 * 
 * 提示： 
 * 
 * 
 * 1 <= k <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  // 类似快排，找到一个index，index = nums.length - k
  return f(nums, 0, nums.length - 1, nums.length - k)
};

function f(nums, lo, hi, index) {
  const res = p(nums, lo, hi)

  if (res === index) return nums[res]

  if (res < index) {
      return f(nums, res + 1, hi, index)
  } else {
      return f(nums, lo, res - 1, index)
  }
}

function p(nums, lo, hi) {
  // 随机找一个数，让他排到正确的位置上
  const index = Math.floor(Math.random() * (hi - lo + 1) + lo)
  swap(nums, index, hi)

  // 上面交换后，即x为要排的数字
  const x = nums[hi]
  // i 表示x要插入的位置
  let i = lo - 1
  for (let j = lo; j < hi; j++) {
      if (nums[j] <= x) {
          // 比x小的插入到i，i更新
          swap(nums, ++i, j)
      }
  }
  swap(nums, i + 1, hi)
  return i + 1
}

function swap(nums, i, j) {
  const temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}
// @lc code=end

