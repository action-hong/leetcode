/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
 */

const { createList, ListNode } = require("./utils");

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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head) return head
  const dummy = new ListNode(-101, head)
  let prev = dummy
  let cur = head
  while (cur && cur.next) {
      if (cur.val === cur.next.val) {
          const val = cur.val
          while (cur.next && cur.next.val === val) {
              cur = cur.next
          }
          prev.next = cur.next
          cur = cur.next
      } else {
          prev = cur
          cur = cur.next
      }
  }

  return dummy.next
};
// @lc code=end

const head = createList([1, 1])

console.log(deleteDuplicates(head));

