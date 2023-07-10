/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const dir = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1]
  ]
  const m = grid.length
  const n = grid[0].length
  let res = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        res++
        bfs(i, j)
      }
    }
  }

  function bfs(i, j) {
    grid[i][j] = 2
    dir.forEach(([di, dj]) => {
      const ni = i + di
      const nj = j + dj
      if (ni < 0 || nj < 0 || ni >= m || nj >= n) return
      if (grid[ni][nj] === "1") {
        bfs(ni, nj)
      }
    })
  }

  return res
};
// @lc code=end

const grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]

const res = numIslands(grid)

console.log(res);