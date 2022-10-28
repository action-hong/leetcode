/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
  let ans = Number.MIN_VALUE

  // 1. 计算该节点左右两边最大值是多少, 合起来加上自身的val，更新答案最大值
  // 2. 返回 左右两边 最大的一边的数值，加上自身val
  function inner (node) {
      if (!node) {
          return 0
      }

      const left = Math.max(inner(node.left), 0)
      const right =  Math.max(inner(node.right), 0)

      ans = Math.max(ans, left + right + node.val)

      return node.val + Math.max(left, right)
      
  }

  inner(root)
  return ans
};
// @lc code=end

maxPathSum({
  val: -3
})
