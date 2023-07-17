const { createList, ListNode } = require('./utils')

/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  if (left === right) return head
  const dummy = new ListNode(null, head)
  // 找到left 前一个， right 的后一个
  let cur = dummy
  // left的前一个
  let leftPrev
  // right的后面
  let rightNext
  let leftNode
  let rightNode
  let i = 0
  while (true) {
      if (i === left - 1) {
          leftPrev = cur
      }
      if (i === left) {
          leftNode = cur
      }
      if (i === right) {
          rightNode = cur
          rightNext = cur.next
          break
      }
      cur = cur.next
      i++
  }

  // 翻转left 到right
  cur = leftNode
  let prev = null
  while (prev !== rightNode) {
      const next = cur.next
      cur.next = prev
      prev = cur
      cur = next
  }

  leftNode.next = rightNext
  leftPrev.next = rightNode
  
  return dummy.next
};
// @lc code=end

const list = createList([1, 2, 3, 4, 5])

const l = reverseBetween(list, 2, 4)

console.log(l.toString());
