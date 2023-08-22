/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  // 牛顿迭代法
  // https://leetcode-cn.com/problems/sqrtx/solution/x-de-ping-fang-gen-by-leetcode-solution/
  if (x === 0) return 0
  let C = x
  let x0 = x
  while(true) {
    const xi = 0.5 * (x0 + C / x0)
    if (Math.abs(x0 - xi) < 1e-7) break
    x0 = xi
  }
  return Math.floor(x0)
};
// @lc code=end

