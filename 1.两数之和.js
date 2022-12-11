/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 *
 * https://leetcode.cn/problems/two-sum/description/
 *
 * algorithms
 * Easy (52.79%)
 * Likes:    15665
 * Dislikes: 0
 * Total Accepted:    3.9M
 * Total Submissions: 7.5M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 
 * 你可以按任意顺序返回答案。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[0,1]
 * 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [3,2,4], target = 6
 * 输出：[1,2]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [3,3], target = 6
 * 输出：[0,1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 2 <= nums.length <= 10^4
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 * 只会存在一个有效答案
 * 
 * 
 * 进阶：你可以想出一个时间复杂度小于 O(n^2) 的算法吗？
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
      if (map.has(nums[i])) {
          map.get(nums[i]).push(i)
      } else {
          map.set(nums[i], [i])
      }
  }

  console.log(map)

  for (let i = 0; i < nums.length; i++) {
      const indexArray = map.get(target - nums[i])
      for (const j of indexArray) {
        if (i !== j) return [i, j]
      }
  }
};

// 用二分法，不行，序号不能改变呀
function binarySearch(start, end, nums, target) {
  let lo = start
  let hi = end
  while(lo <= hi) {
      const mid = Math.floor((hi - lo) / 2) + lo
      if (nums[mid] === target) return mid
      else if (nums[mid] < target) lo = mid + 1
      else hi = mid - 1 
  }
  return -1
};
// @lc code=end


const nums = [3, 2, 4]
const target = 6
const res = twoSum(nums, target)
console.log(res)