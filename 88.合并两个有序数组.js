/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {

  // // 从后向前
  // let i = m - 1
  // let j = n - 1
  // let k = m + n - 1

  // while (i >= 0 && j >= 0) {
  //   if (nums1[i] > nums2[j]) {
  //     nums1[k] = nums1[i]
  //     i--
  //   } else {
  //     nums1[k] = nums2[j]
  //     j--
  //   }
  //   k--
  // }

  // while (i >= 0) {
  //   nums1[k--] = nums1[i--]
  // }

  // while (j >= 0) {
  //   nums1[k--] = nums1[j--]
  // }
  let k = m + n - 1
  m--
  n--
  while (n >= 0) {
    while (m >= 0 && (nums1[m] > nums2[n])) {
      // nums1的大，放到后面去
      nums1[k--] = nums1[m--]
    }
    // num2 的大，放到后面去
    nums1[k--] = nums2[n--]
  }
};



// @lc code=end

const nums1 = [1, 2, 3]
const nums2 = [2, 5, 6]

merge(nums1, 3, nums2, 3)
console.log(nums1);
