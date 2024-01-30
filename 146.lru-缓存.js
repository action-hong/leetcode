/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 *
 * https://leetcode.cn/problems/lru-cache/description/
 *
 * algorithms
 * Medium (53.47%)
 * Likes:    2737
 * Dislikes: 0
 * Total Accepted:    494.5K
 * Total Submissions: 924.7K
 * Testcase Example:  '["LRUCache","put","put","get","put","get","put","get","get","get"]\n' +
  '[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]'
 *
 * 请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
 * 
 * 实现 LRUCache 类：
 * 
 * 
 * 
 * 
 * LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
 * int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
 * void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组
 * key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
 * 
 * 
 * 函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。
 * 
 * 
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入
 * ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
 * [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
 * 输出
 * [null, null, null, 1, null, -1, null, -1, 3, 4]
 * 
 * 解释
 * LRUCache lRUCache = new LRUCache(2);
 * lRUCache.put(1, 1); // 缓存是 {1=1}
 * lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
 * lRUCache.get(1);    // 返回 1
 * lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
 * lRUCache.get(2);    // 返回 -1 (未找到)
 * lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
 * lRUCache.get(1);    // 返回 -1 (未找到)
 * lRUCache.get(3);    // 返回 3
 * lRUCache.get(4);    // 返回 4
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= capacity <= 3000
 * 0 <= key <= 10000
 * 0 <= value <= 10^5
 * 最多调用 2 * 10^5 次 get 和 put
 * 
 * 
 */

// @lc code=start
function DLinkNode(
  key,
  value,
) {
  this.key = key
  this.value = value
  this.prev = null
  this.next = null
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  // 双向链表
  // map 记录 key -> node
  this.map = {}
  // 假的两个头尾
  this.head = new DLinkNode()
  this.tail = new DLinkNode()
  this.head.next = this.tail
  this.tail.prev = this.head
  this.size = 0
  this.capacity = capacity
};

LRUCache.prototype.moveToHead = function(node) {
  this.removeNode(node)
  this.addToHead(node)
}

LRUCache.prototype.addToHead = function(node) {
  node.prev = this.head
  node.next = this.head.next
  this.head.next.prev = node
  this.head.next = node
}

LRUCache.prototype.removeNode = function(node) {
  node.next.prev = node.prev
  node.prev.next = node.next
}

LRUCache.prototype.removeTail = function() {
  const res = this.tail.prev
  this.removeNode(res)
  delete this.map[res.key]
  return res
}


/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  const node = this.map[key]
  if (node) {
    this.moveToHead(node)
    return node.value
  }
  return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  let node = this.map[key]

  if (node) {
    // 已存在，移动到顶部即可
    node.value = value
    this.moveToHead(node)
  } else {
    // 造一个
    node = new DLinkNode(key, value)
    this.size++
    this.addToHead(node)
    this.map[key] = node

    if (this.size > this.capacity) {
      this.size--
      this.removeTail();
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

