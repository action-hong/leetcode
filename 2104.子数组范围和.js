/*
 * @lc app=leetcode.cn id=2104 lang=javascript
 *
 * [2104] 子数组范围和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 var subArrayRanges = function(nums) {
  // 找到所有子数组的最大值
  // 找到所有子数组的最小值
  let min = 0
  let max = 0
  const n = nums.length
  const queue = []
  const queue1 = []
  for (let i = -1; i < n + 1; i++) {
      while (queue.length > 0 && g(nums, n, queue[queue.length - 1]) > g(nums, n, i)) {
          // 栈顶
          const cur = queue.pop()
          // 此时cur的左边界即为栈顶
          // 右边界为i
          min += (cur - queue[queue.length - 1]) * (i - cur) * nums[cur]
      }
      queue.push(i)

      while (queue1.length > 0 && b(nums, n, queue1[queue1.length - 1]) < b(nums, n, i)) {
          // 栈顶
          const cur = queue1.pop()
          // 此时cur的左边界即为栈顶
          // 右边界为i
          max += (cur - queue1[queue1.length - 1]) * (i - cur) * nums[cur]
      }
      queue1.push(i)
  }
  return max - min
};

function g(arr, n, i) {
// 边界值时最小值
if (i === -1 || n === i) return Number.NEGATIVE_INFINITY
return arr[i]
}

function b(arr, n, i) {
// 边界值时最小值
if (i === -1 || n === i) return Number.POSITIVE_INFINITY
return arr[i]
}
// @lc code=end

