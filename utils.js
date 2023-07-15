function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

ListNode.prototype.toString = function() {
  const nums = []
  let cur = this
  while(cur) {
    nums.push(cur.val)
    cur = cur.next
  }
  return nums.join(',')
}

/**
 * 
 * @param {number[]} nums 
 */
function createList(nums) {
  const dummy = new ListNode(-1)
  let cur = dummy
  for (let i = 0; i < nums.length; i++) {
    cur.next = new ListNode(nums[i])
    cur = cur.next
  }
  return dummy.next
}

/**
 * 
 * @param {number[]} nums 
 * @param {number} pos 
 */
function createCycleList(nums, pos) {
  const head = createList(nums)
  if (pos === -1) return head
  let cur = head
  let p
  let tail
  while (cur) {
    if (pos === 0) {
      p = cur
    }
    tail = cur
    pos--
    cur = cur.next
  }

  tail.next = p
  return head
}

module.exports = {
  createList,
  ListNode
}