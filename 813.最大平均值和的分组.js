/*
 * @lc app=leetcode.cn id=813 lang=javascript
 *
 * [813] 最大平均值和的分组
 *
 * https://leetcode.cn/problems/largest-sum-of-averages/description/
 *
 * algorithms
 * Medium (56.15%)
 * Likes:    317
 * Dislikes: 0
 * Total Accepted:    19.6K
 * Total Submissions: 32.6K
 * Testcase Example:  '[9,1,2,3,9]\n3'
 *
 * 给定数组 nums 和一个整数 k 。我们将给定的数组 nums 分成 最多 k 个相邻的非空子数组 。 分数 由每个子数组内的平均值的总和构成。
 * 
 * 注意我们必须使用 nums 数组中的每一个数进行分组，并且分数不一定需要是整数。
 * 
 * 返回我们所能得到的最大 分数 是多少。答案误差在 10^-6 内被视为是正确的。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: nums = [9,1,2,3,9], k = 3
 * 输出: 20.00000
 * 解释: 
 * nums 的最优分组是[9], [1, 2, 3], [9]. 得到的分数是 9 + (1 + 2 + 3) / 3 + 9 = 20. 
 * 我们也可以把 nums 分成[9, 1], [2], [3, 9]. 
 * 这样的分组得到的分数为 5 + 2 + 6 = 13, 但不是最大值.
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: nums = [1,2,3,4,5,6,7], k = 4
 * 输出: 20.50000
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 <= nums.length <= 100
 * 1 <= nums[i] <= 10^4
 * 1 <= k <= nums.length
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumOfAverages = function(nums, k) {
  // const n = nums.length;
  // const prefix = new Array(n + 1).fill(0);
  // for (let i = 0; i < n; i++) {
  //     prefix[i + 1] = prefix[i] + nums[i];
  // }
  // const dp = new Array(n + 1).fill(0);
  // for (let i = 1; i <= n; i++) {
  //     dp[i] = prefix[i] / i;
  // }
  // for (let j = 2; j <= k; j++) {
  //     for (let i = n; i >= j; i--) {
  //         for (let x = j - 1; x < i; x++) {
  //             dp[i] = Math.max(dp[i], dp[x] + (prefix[i] - prefix[x]) / (i - x));
  //         }
  //     }
  // }
  // console.log(dp)
  // return dp[n];

 const n = nums.length
  const dp = new Array(n + 1).fill(0)
  const prefix = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = nums[i] + prefix[i]
  }

  for (let i = 1; i <= n; i++) {
    dp[i] = prefix[i] / i
  }

  for (let j = 2; j <= k; j++) {
      for (let i = n; i >= j; i--) {
          // 主要要倒序，每一轮要用的是上一轮的dp数据
          // dp[1], dp[2]
          // 正序的话，dp[1]已经更新到新一轮了，此时即使dp[2]时，就没法找到上一轮的dp了
          for (let x = j - 1; x < i; x++) {
              dp[i] = Math.max(dp[i], dp[x] + (prefix[i] - prefix[x]) / (i - x))
          }
      }
  }
  console.log(dp)
  return dp[nums.length]
};
// @lc code=end

// const nums = [9, 1, 2, 3, 9]
// const k = 3
const nums = [1,2,3,4,5,6,7]
const k = 4
largestSumOfAverages(nums, k)
