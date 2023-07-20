/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start

var MyQueue = function () {
  this.list = []
  this.temp = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.list.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  this.list2Temp()
  const res = this.temp.pop()
  this.temp2List()
  return res
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  this.list2Temp()
  const res = this.temp[this.temp.length - 1]
  this.temp2List()
  return res
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.list.length === 0
};

MyQueue.prototype.temp2List = function () {
  while (this.temp.length) {
    this.list.push(this.temp.pop())
  }
}

MyQueue.prototype.list2Temp = function () {
  while (this.list.length) {
    this.temp.push(this.list.pop())
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

var obj = new MyQueue()
obj.push(1)
obj.push(2)
var param_2 = obj.pop()
var param_3 = obj.peek()
var param_4 = obj.empty()

console.log(param_2, param_3, param_4);

