/*
 * @lc app=leetcode.cn id=907 lang=javascript
 *
 * [907] 子数组的最小值之和
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
 var sumSubarrayMins = function(arr) {
  const n = arr.length
  const left = []
  const right = []
  const queue = []
  for(let i = 0; i < n; i++) {
      while(queue.length !== 0 && arr[queue[queue.length - 1]] > arr[i]) {
          queue.pop()
      }
      // 此时queue栈顶对应的值必然时大于arr[i]的，即左边界
      if (queue.length === 0) {
          left[i] = -1
      } else {
          left[i] = queue[queue.length - 1]
      }

      queue.push(i)
  }
  queue.length=0
  for(let i = n - 1; i >= 0; i--) {
      while(queue.length !== 0 && arr[queue[queue.length - 1]] >= arr[i]) {
          queue.pop()
      }
      // 此时queue栈顶对应的值必然时大于arr[i]的，即左边界
      if (queue.length === 0) {
          right[i] = n
      } else {
          right[i] = queue[queue.length - 1]
      }
      queue.push(i)
  }

  let ans = 0

  for (let i = 0; i < n; i++) {
      ans = ans + ((i - left[i]) * (right[i] - i) * arr[i])
  }
  return ans  % 1000000007
};
// @lc code=end

