/*
 * @lc app=leetcode.cn id=864 lang=javascript
 *
 * [864] 获取所有钥匙的最短路径
 *
 * https://leetcode.cn/problems/shortest-path-to-get-all-keys/description/
 *
 * algorithms
 * Hard (47.74%)
 * Likes:    156
 * Dislikes: 0
 * Total Accepted:    7.9K
 * Total Submissions: 14.2K
 * Testcase Example:  '["@.a..","###.#","b.A.B"]'
 *
 * 给定一个二维网格 grid ，其中：
 * 
 * 
 * '.' 代表一个空房间
 * '#' 代表一堵
 * '@' 是起点
 * 小写字母代表钥匙
 * 大写字母代表锁
 * 
 * 
 * 
 * 我们从起点开始出发，一次移动是指向四个基本方向之一行走一个单位空间。我们不能在网格外面行走，也无法穿过一堵墙。如果途经一个钥匙，我们就把它捡起来。除非我们手里有对应的钥匙，否则无法通过锁。
 * 
 * 假设 k 为 钥匙/锁 的个数，且满足 1 <= k <= 6，字母表中的前 k
 * 个字母在网格中都有自己对应的一个小写和一个大写字母。换言之，每个锁有唯一对应的钥匙，每个钥匙也有唯一对应的锁。另外，代表钥匙和锁的字母互为大小写并按字母顺序排列。
 * 
 * 返回获取所有钥匙所需要的移动的最少次数。如果无法获取所有钥匙，返回 -1 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：grid = ["@.a.#","###.#","b.A.B"]
 * 输出：8
 * 解释：目标是获得所有钥匙，而不是打开所有锁。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 
 * 
 * 输入：grid = ["@..aA","..B#.","....b"]
 * 输出：6
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: grid = ["@Aa"]
 * 输出: -1
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 30
 * grid[i][j] 只含有 '.', '#', '@', 'a'-'f' 以及 'A'-'F'
 * 钥匙的数目范围是 [1, 6] 
 * 每个钥匙都对应一个 不同 的字母
 * 每个钥匙正好打开一个对应的锁
 * 
 * 
 */

const dirs = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1]
]

// @lc code=start
/**
 * @param {string[]} grid
 * @return {number}
 */
var shortestPathAllKeys = function (grid) {
  // 用一个数表示拿到钥匙的情况
  // map就是字母与 对应位数的 关系
  const keyToIndex = new Map()
  const m = grid.length
  const n = grid[0].length
  let sx = 0
  let sy = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if ('a' <= grid[i][j] && 'z' >= grid[i][j] && !keyToIndex.has(grid[i][j])) {
        keyToIndex.set(grid[i][j], keyToIndex.size)
      } else if (grid[i][j] === '@') {
        sx = i
        sy = j
      }

    }
  }

  // dp[i][j][mask] 表示走到位置(i, j)时，带的钥匙为mask，走的路
  // 初始化都是 dp[i][j][mask]
  // 同一个位置，带了相同的mask是不会走两次了（走了两次说明刚才走了无效的路程，没获取新的钥匙）
  const dp = Array.from({
    length: m
  }, () => Array.from({
    length: n
  }, () => new Array(1 << keyToIndex.size).fill(-1)))

  const queue = [
    [sx, sy, 0]
  ]

  // 初始位置为0
  dp[sx][sy][0] = 0

  while (queue.length > 0) {
    const [x, y, mask] = queue.shift()
    for (let k = 0; k < dirs.length; k++) {
      const [dx, dy] = dirs[k]
      const nx = x + dx
      const ny = y + dy

      // 没走过
      if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] !== '#') {
        const c = grid[nx][ny]
        if (c === '.' || c === '@') {
          if (dp[nx][ny][mask] === -1) {
            dp[nx][ny][mask] = dp[x][y][mask] + 1
            queue.push([nx, ny, mask])
          }
        } else if ('a' <= c && 'z' >= c) {
          // 拿钥匙啦
          const idx = keyToIndex.get(c)
          const nMask = mask | (1 << idx)

          if (dp[nx][ny][nMask] === -1) {
            dp[nx][ny][nMask] = dp[x][y][mask] + 1
            if (nMask === ((1 << keyToIndex.size) - 1)) {
              // 钥匙都拿到啦！
              // 因为我们是按照bfs来的，一步一步向外扩
              // 先找到第一个满足的，肯定是步数最短的
              console.log(dp[0][1])
              return dp[nx][ny][nMask]
            }
            queue.push([nx, ny, nMask])
          }
        } else {
          const idx = keyToIndex.get(c.toLowerCase())
          if ((mask & (1 << idx)) !== 0 && dp[nx][ny][mask] === -1) {
            // 有这个钥匙，可以走！
            dp[nx][ny][mask] = dp[x][y][mask] + 1
            queue.push([nx, ny, mask])
          }
        }
      }
    }
  }

  return -1
}
// @lc code=end

const grid = 
  ["@.a.#","###.#","b.A.B"]


const res = shortestPathAllKeys(grid)

console.log(res);

