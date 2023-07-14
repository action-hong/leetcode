/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const n = matrix.length
  const m = matrix[0].length

  const res = []

  // 边界
  let left = 0
  let right = m - 1
  let top = 0
  let bottom = n - 1

  while (true) {
    for (let i = left; i <= right; i++) res.push(matrix[top][i])
    // 上边界超过下边界了
    if (++top > bottom) break
    for (let i = top; i <= bottom; i++) res.push(matrix[i][right])
    if (--right < left) break
    for (let i = right; i >= left; i--) res.push(matrix[bottom][i])
    if (--bottom < top) break
    for (let i = bottom; i >= top; i--) res.push(matrix[i][left])
    if (++left > right) break
  }
  return res
};
// @lc code=end

const matrix = [[1,2,3],[4,5,6],[7,8,9]]
const res = spiralOrder(matrix)
console.log(res);