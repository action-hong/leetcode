/*
 * @lc app=leetcode.cn id=1812 lang=javascript
 *
 * [1812] 判断国际象棋棋盘中一个格子的颜色
 *
 * https://leetcode.cn/problems/determine-color-of-a-chessboard-square/description/
 *
 * algorithms
 * Easy (78.44%)
 * Likes:    28
 * Dislikes: 0
 * Total Accepted:    29.8K
 * Total Submissions: 36.5K
 * Testcase Example:  '"a1"'
 *
 * 给你一个坐标 coordinates ，它是一个字符串，表示国际象棋棋盘中一个格子的坐标。下图是国际象棋棋盘示意图。
 * 
 * 
 * 
 * 如果所给格子的颜色是白色，请你返回 true，如果是黑色，请返回 false 。
 * 
 * 给定坐标一定代表国际象棋棋盘上一个存在的格子。坐标第一个字符是字母，第二个字符是数字。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：coordinates = "a1"
 * 输出：false
 * 解释：如上图棋盘所示，"a1" 坐标的格子是黑色的，所以返回 false 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：coordinates = "h3"
 * 输出：true
 * 解释：如上图棋盘所示，"h3" 坐标的格子是白色的，所以返回 true 。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：coordinates = "c7"
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * coordinates.length == 2
 * 'a' 
 * '1' 
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} coordinates
 * @return {boolean}
 */
 var squareIsWhite = function(coordinates) {
  let [x, y] = coordinates.split('')
  x = x.charCodeAt(0) - 96
  // 都是偶数，都是奇数 则为黑色
  return (x % 2 === 0) ^ (y % 2 === 0)
};
// @lc code=end

let t = [
  'h3'
]

const res = t.map(squareIsWhite)

console.log(res)
