/*
 * @lc app=leetcode.cn id=764 lang=javascript
 *
 * [764] 最大加号标志
 *
 * https://leetcode.cn/problems/largest-plus-sign/description/
 *
 * algorithms
 * Medium (49.55%)
 * Likes:    138
 * Dislikes: 0
 * Total Accepted:    11.9K
 * Total Submissions: 22.4K
 * Testcase Example:  '5\n[[4,2]]'
 *
 * 在一个 n x n 的矩阵 grid 中，除了在数组 mines 中给出的元素为 0，其他每个元素都为 1。mines[i] = [xi, yi]表示
 * grid[xi][yi] == 0
 * 
 * 返回  grid 中包含 1 的最大的 轴对齐 加号标志的阶数 。如果未找到加号标志，则返回 0 。
 * 
 * 一个 k 阶由 1 组成的 “轴对称”加号标志 具有中心网格 grid[r][c] == 1 ，以及4个从中心向上、向下、向左、向右延伸，长度为
 * k-1，由 1 组成的臂。注意，只有加号标志的所有网格要求为 1 ，别的网格可能为 0 也可能为 1 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入: n = 5, mines = [[4, 2]]
 * 输出: 2
 * 解释: 在上面的网格中，最大加号标志的阶只能是2。一个标志已在图中标出。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 
 * 
 * 输入: n = 1, mines = [[0, 0]]
 * 输出: 0
 * 解释: 没有加号标志，返回 0 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 500
 * 1 <= mines.length <= 5000
 * 0 <= xi, yi < n
 * 每一对 (xi, yi) 都 不重复​​​​​​​
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function (n, mines) {
  let ans = 0
  let count = 0
  const zero = new Set()
  for (let i = 0; i < mines.length; i++) {
    const [r, c] = mines[i]
    zero.add(r * n + c)
  }
  const dp = Array.from({
    length: n
  }, () => new Array(n).fill(n))
  // left
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (zero.has(i * n + j)) {
        count = 0
      } else {
        count++
      }
      dp[i][j] = Math.min(count, dp[i][j])
    }
    count = 0
  }

  // right
  for (let i = 0; i < n; i++) {
    for (let j = n - 1; j >= 0; j--) {
      if (zero.has(i * n + j)) {
        count = 0
      } else {
        count++
      }
      dp[i][j] = Math.min(count, dp[i][j])
    }
    count = 0
  }
  
  // top
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (zero.has(j * n + i)) {
        count = 0
      } else {
        count++
      }
      dp[j][i] = Math.min(count, dp[j][i])
    }
    count = 0
  }

  // bottom
  for (let i = 0; i < n; i++) {
    for (let j = n - 1; j >= 0; j--) {
      if (zero.has(j * n + i)) {
        count = 0
      } else {
        count++
      }
      dp[j][i] = Math.min(count, dp[j][i])
      ans = Math.max(ans, dp[i][j])
    }
    count = 0
  }

  return ans
}
// @lc code=end

const n = 3
const mines = [[0,0],[0,2],[1,0],[1,1],[1,2],[2,2]]

const res = orderOfLargestPlusSign(n, mines)

console.log(res)

