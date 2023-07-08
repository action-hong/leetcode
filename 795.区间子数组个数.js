/*
 * @lc app=leetcode.cn id=795 lang=javascript
 *
 * [795] 区间子数组个数
 *
 * https://leetcode.cn/problems/number-of-subarrays-with-bounded-maximum/description/
 *
 * algorithms
 * Medium (53.10%)
 * Likes:    287
 * Dislikes: 0
 * Total Accepted:    25.5K
 * Total Submissions: 45.2K
 * Testcase Example:  '[2,1,4,3]\n2\n3'
 *
 * 给你一个整数数组 nums 和两个整数：left 及 right 。找出 nums 中连续、非空且其中最大元素在范围 [left, right]
 * 内的子数组，并返回满足条件的子数组的个数。
 * 
 * 生成的测试用例保证结果符合 32-bit 整数范围。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [2,1,4,3], left = 2, right = 3
 * 输出：3
 * 解释：满足条件的三个子数组：[2], [2, 1], [3]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [2,9,2,5,6], left = 2, right = 8
 * 输出：7
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 10^5
 * 0 <= nums[i] <= 10^9
 * 0 <= left <= right <= 10^9
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function (nums, left, right) {
  // 等于最大值小于等于right的子集数量  减去 最大值小于等于 left - 1的子集数量
  return foo(nums, right) - foo(nums, left - 1)
}

function foo(nums, max) {
  let res = 0
  let sub = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= max) {
      sub++
      res += sub
    } else {
      // 重新计算子集的数量
      sub = 0
    }
  }
  return res
}
// @lc code=end

const nums = [2, 1, 4, 3]
const left = 2
const right = 3

const res = numSubarrayBoundedMax(nums, left, right)
console.log(res);