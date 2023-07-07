const { createList, ListNode } = require('./utils')

/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  const dummy = new ListNode(-1)
  let cur = dummy
  while(list1 && list2) {
      if (list1.val > list2.val) {
          cur.next = list2
          list2 = list2.next
      } else {
          cur.next = list1
          list1 = list1.next
      }
      cur = cur.next
  }

  cur.next = list1 || list2

  return dummy.next
};
// @lc code=end

const list1 = createList([1, 2, 4])
const list2 = createList([1, 3, 4])

const merge = mergeTwoLists(list1, list2)
console.log(merge.toString());