/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 *
 * https://leetcode.cn/problems/reverse-nodes-in-k-group/description/
 *
 * algorithms
 * Hard (67.67%)
 * Likes:    2059
 * Dislikes: 0
 * Total Accepted:    473.1K
 * Total Submissions: 699.2K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。
 * 
 * k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 * 
 * 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,4,5], k = 2
 * 输出：[2,1,4,3,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 
 * 
 * 输入：head = [1,2,3,4,5], k = 3
 * 输出：[3,2,1,4,5]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中的节点数目为 n
 * 1 <= k <= n <= 5000
 * 0 <= Node.val <= 1000
 * 
 * 
 * 
 * 
 * 进阶：你可以设计一个只用 O(1) 额外内存空间的算法解决此问题吗？
 * 
 * 
 * 
 * 
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  const dummy = new ListNode(0)
  dummy.next = head

  let pre = dummy
  let end = dummy

  while (end.next) {
    for (let i = 0; i < k; i++) {
      end = end.next
    }
    if (!end) break

    const start = pre.next
    // 下一个需要翻转的
    const next = end.next

    // 断开 前面k个
    end.next = null

    pre.next = reverse(start)
    // start 变到尾部了，连接上刚刚尾部的下一个
    start.next = next

    // 更新 前一个的尾部
    pre = start
    end = pre
  }

  return dummy.next
};

function reverse(head) {
  let prev = null
  let cur = head
  while (cur) {
    const next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }

  return prev

}
// @lc code=end

// 构造link
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

ListNode.prototype.toString = function () {
  const arr = []  
  let node = this
  while (node) {
    arr.push(node.val)
    node = node.next
  }
  console.log(arr);
}

/**
 * 
 * @param {number[]} nums 
 */
function c(nums) {
  const head = new ListNode(nums[0])
  let cur = head
  for (let i = 1; i < nums.length; i++) {
    cur.next = new ListNode(nums[i])
    cur = cur.next
  }
  return head
}

const list = c([1, 2, 3, 4, 5])

console.log(list.toString());

const h = reverseKGroup(list, 2)

console.log(h.toString());
