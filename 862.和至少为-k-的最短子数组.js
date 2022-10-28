/*
 * @lc app=leetcode.cn id=862 lang=javascript
 *
 * [862] 和至少为 K 的最短子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function(nums, k) {
  // 前缀和
  const n = nums.length
  const preSum = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    preSum[i + 1] = preSum[i] + nums[i]
  }
  // 队列
  // 维护一个下标，隐射到preSums 为单调递增 
  const queue = []

  let res = n + 1
  for (let i = 0; i <= n; i++) {
    // 因为是递增的，所以如果不满足的话，剩下的也没必要再比较了
    while(queue.length !== 0 && preSum[i] - preSum[queue[0]] >= k) {
      // 满足，更新最小值
      res = Math.min(res, i - queue.shift())
    }

    // 插入preSums[i]
    // 注意插入时，要去掉比preSums [i] 大的下标 如 preSums[a]
    // 因为后续 如果有满足 preSums[i] 和 比preSums[a], 由于 i > a, 必然 i的情况更短
    while(queue.length >= 0 && preSum[queue[queue.length - 1]] >= preSum[i]) {
      // queue 中最大值比 preSums[i]大，去掉
      queue.pop()
    }

    queue.push(i)
  }

  return res < n + 1 ? res : -1
};
// @lc code=end

// let k = 1
// let nums = [1]

function test(arr) {
  arr.forEach(( [nums, k, expect] ) => {
    const result = shortestSubarray(nums, k)
    if (result === expect) {
      console.log('==> success!', nums, k, expect)
    } else {
      console.log('==> failure!! expect: ' + expect + ', but got ' + result, nums, k)
    }
  })
}

test([
  [
    [-11,-15,76,41,-41,68,41,12,73,-8],
    50, 1
  ]
])

