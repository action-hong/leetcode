/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (lists.length === 0) return null
  if (lists.length === 1) return lists[0]
  if (lists.length === 2) {
      const dumpy = new ListNode(-1, null)
      let l1 = lists[0]
      let l2 = lists[1]
      let cur = dumpy
      while (l1 && l2) {
          if (l1.val < l2.val) {
              cur.next = l1
              l1 = l1.next
          } else {
              cur.next = l2
              l2 = l2.next
          }
          cur = cur.next
      }
      cur.next = l1 || l2
      return dumpy.next
  }

  const mid = Math.floor(lists.length / 2)
  const l1 = mergeKLists(lists.slice(0, mid))
  const l2 = mergeKLists(lists.slice(mid))
  return mergeKLists([l1, l2])
};
// @lc code=end

