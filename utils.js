function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

ListNode.prototype.toString = function () {
  const nums = []
  let cur = this
  while (cur) {
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

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * 
 * @param {number[]} arr 
 */
function createTree(arr) {
  const root = new TreeNode(arr.shift())
  const queue = [root]
  while (queue.length) {
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      if (!node) continue
      const left = arr.shift()
      const right = arr.shift()

      node.left = left || left === 0 ? new TreeNode(left) : null
      node.right = right || right === 0 ? new TreeNode(right) : null
      queue.push(node.left)
      queue.push(node.right) 
    }
  }
  return root
}

module.exports = {
  createList,
  createTree,
  ListNode
}