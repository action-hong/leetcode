/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length === 1) return nums[0] === target ? 0 : -1
  // 二分法
  // 找到分割点
  let t = 0
  for(let i = 1; i < nums.length; i++) {
      if (nums[i] < nums[i - 1]) {
          t = i
          break
      }
  }

  // 转化后，前len-t变到后面了
  // i = i < (len - t) ? i + t ? i - t
  // 经过转换后，i >= t ? i - t : i + (len - t) => (i + len - t) % len
  const len = nums.length
  let lo = 0
  let hi = len - 1
  while (lo <= hi) {
      const mid = Math.floor((lo + hi) / 2)
      const tMid = (mid + len + t) % len
      if (nums[tMid] === target) return tMid
      else if (nums[tMid] < target) {
          lo = mid + 1
      } else {
          hi = mid - 1
      }
  }
  return -1
};
// @lc code=end

console.log(search([4,5,6,7,0,1,2], 0));
console.log(search([5, 1, 3], 5));
console.log(search([3, 5, 1], 3));
