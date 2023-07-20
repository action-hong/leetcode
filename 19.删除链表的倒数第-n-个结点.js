/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  // 思路：计算总各多少节点，然后就可得知倒数第n个是正数第几个
      // O(2 * n)
      let cur = head
      let c = 0
      while (cur) {
          cur = cur.next
          c++
      }
  
      // 共有c个
      // 即找到第 c + 1 - n个
      const dummy = new ListNode(-1, head)
      pre = dummy
      cur = head
      let i = c + 1 - n
      while (i > 1) {
          pre = cur
          cur = cur.next
          i--
      }
  
      pre.next = cur.next
  
      return dummy.next
};
// @lc code=end

