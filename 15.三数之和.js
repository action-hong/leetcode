/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode.cn/problems/3sum/description/
 *
 * algorithms
 * Medium (37.04%)
 * Likes:    6057
 * Dislikes: 0
 * Total Accepted:    1.4M
 * Total Submissions: 3.8M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j !=
 * k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
 * 
 * 你返回所有和为 0 且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 * 解释：
 * nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
 * nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
 * nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
 * 不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
 * 注意，输出的顺序和三元组的顺序并不重要。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0,1,1]
 * 输出：[]
 * 解释：唯一可能的三元组和不为 0 。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [0,0,0]
 * 输出：[[0,0,0]]
 * 解释：唯一可能的三元组和为 0 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 3 <= nums.length <= 3000
 * -10^5 <= nums[i] <= 10^5
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = []
  if (nums.length < 3) return res
  const len = nums.length
  nums.sort((a, b) => a - b)
  for (let i = 0; i < len; i++) {
    // 大于0了，后面的肯定都不满足了
    if (nums[i] > 0) return res

    if (i > 0 && nums[i] === nums[i - 1]) {
      // 重复的没必要再计算了
      continue
    }

    let l = i + 1
    let r = len - 1

    while (l < r) {
      const val = nums[i] + nums[l] + nums[r]
      if (val === 0) {
        // 满足
        res.push([nums[i], nums[l], nums[r]])
        
        // 过滤重复
        while((l < r) && (nums[l] === nums[l + 1])) {
          l++
        }
        while((l < r) && (nums[r] === nums[r - 1])) {
          r--
        }
        l++
        r--
      } else if (val < 0) {
        l++
      } else {
        r--
      }
    }
  }
  return res
};

var threeSum2 = function (nums) {
  nums.sort((a, b) => a - b)
  const cache = {}
  const res = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const target = -nums[i] - nums[j]
      if (target < 0) {
        break
      }
      const flag = find(nums, target, j + 1, nums.length - 1)
      if (flag) {
        const ans = [nums[i], nums[j], target]
        const key = ans.join('-')
        if (!cache[key]) {
          res.push(ans)
          cache[key] = true
        }
      }
    }
  }

  return res
};

/**
 * 
 * @param {number[]} nums 
 * @param {number} target 
 * @param {number} lo 
 * @param {number} hi 
 * @return {number}
 */
function find(nums, target, lo, hi) {
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2)
    if (nums[mid] === target) return true
    if (nums[mid] < target) {
      lo = mid + 1
    } else {
      hi = mid - 1
    }
  }
  return false
}
// @lc code=end

const inputs = [-1, 0, 1, 2, -1, -4]

const ans = threeSum(inputs)

console.log(ans);