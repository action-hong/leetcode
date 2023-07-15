/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  // 双指针一个慢一个快
  if (!head) return false
  let slow = head.next
  let fast = slow ? slow.next : null
  while (slow && fast) {
      if (slow === fast) return true
      slow = slow.next
      fast = fast.next ? fast.next.next : null 
  }
  return false 
};
// @lc code=end

