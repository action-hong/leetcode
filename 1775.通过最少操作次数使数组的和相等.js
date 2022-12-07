/*
 * @lc app=leetcode.cn id=1775 lang=javascript
 *
 * [1775] 通过最少操作次数使数组的和相等
 *
 * https://leetcode.cn/problems/equal-sum-arrays-with-minimum-number-of-operations/description/
 *
 * algorithms
 * Medium (48.49%)
 * Likes:    78
 * Dislikes: 0
 * Total Accepted:    8.3K
 * Total Submissions: 15.8K
 * Testcase Example:  '[1,2,3,4,5,6]\n[1,1,2,2,2,2]'
 *
 * 给你两个长度可能不等的整数数组 nums1 和 nums2 。两个数组中的所有值都在 1 到 6 之间（包含 1 和 6）。
 * 
 * 每次操作中，你可以选择 任意 数组中的任意一个整数，将它变成 1 到 6 之间 任意 的值（包含 1 和 6）。
 * 
 * 请你返回使 nums1 中所有数的和与 nums2 中所有数的和相等的最少操作次数。如果无法使两个数组的和相等，请返回 -1 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：nums1 = [1,2,3,4,5,6], nums2 = [1,1,2,2,2,2]
 * 输出：3
 * 解释：你可以通过 3 次操作使 nums1 中所有数的和与 nums2 中所有数的和相等。以下数组下标都从 0 开始。
 * - 将 nums2[0] 变为 6 。 nums1 = [1,2,3,4,5,6], nums2 = [6,1,2,2,2,2] 。
 * - 将 nums1[5] 变为 1 。 nums1 = [1,2,3,4,5,1], nums2 = [6,1,2,2,2,2] 。
 * - 将 nums1[2] 变为 2 。 nums1 = [1,2,2,4,5,1], nums2 = [6,1,2,2,2,2] 。
 * 
 * 
 * 示例 2：
 * 
 * 输入：nums1 = [1,1,1,1,1,1,1], nums2 = [6]
 * 输出：-1
 * 解释：没有办法减少 nums1 的和或者增加 nums2 的和使二者相等。
 * 
 * 
 * 示例 3：
 * 
 * 输入：nums1 = [6,6], nums2 = [1]
 * 输出：3
 * 解释：你可以通过 3 次操作使 nums1 中所有数的和与 nums2 中所有数的和相等。以下数组下标都从 0 开始。
 * - 将 nums1[0] 变为 2 。 nums1 = [2,6], nums2 = [1] 。
 * - 将 nums1[1] 变为 2 。 nums1 = [2,2], nums2 = [1] 。
 * - 将 nums2[0] 变为 4 。 nums1 = [2,2], nums2 = [4] 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums1.length, nums2.length <= 10^5
 * 1 <= nums1[i], nums2[i] <= 6
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minOperations = function (nums1, nums2) {
  // nums1 = nums1.sort()
  // nums2 = nums2.sort()
  // const sum1 = nums1.reduce((a, b) => a + b, 0)
  // const sum2 = nums2.reduce((a, b) => a + b, 0)
  // let min, max, sumMax, sumMin
  // if (sum1 === sum2) return 0
  // if (sum1 < sum2) {
  //   min = nums1
  //   max = nums2
  //   sumMax = sum2
  //   sumMin = sum1
  // } else {
  //   min = nums2
  //   max = nums1
  //   sumMax = sum1
  //   sumMin = sum2
  // }

  // let i = 0
  // let j = max.length - 1
  // let time = 0

  // while (true) {
  //   // 找到可以增大的i
  //   while (i < min.length && min[i] === 6) {
  //     // 6是没法增大的！
  //     i++
  //   }

  //   // 找到可以减小的j
  //   while (j >= 0 && max[j] === 1) {
  //     // 1是没法减小的
  //     j--
  //   }

  //   // 没有能增大或减小的了
  //   if (i === min.length && j === -1) break

  //   const t = sumMax - sumMin

  //   const d1 = i === min.length ? 0 : 6 - min[i]
  //   const d2 = j === -1 ? 0 : max[j] - 1
  //   time++
  //   if (t <= Math.max(d1, d2)) return time
  //   if (d1 > d2) {
  //     // 增大
  //     i++
  //     sumMin += d1
  //   } else {
  //     j--
  //     sumMax -= d2
  //   }
  // }

  // return -1


  // 法2
  const n = nums1.length, m = nums2.length;
    if (6 * n < m || 6 * m < n) {
        return -1;
    }
    const cnt1 = new Array(7).fill(0);
    const cnt2 = new Array(7).fill(0);
    let diff = 0;
    for (const i of nums1) {
        ++cnt1[i];
        diff += i;
    }
    for (const i of nums2) {
        ++cnt2[i];
        diff -= i;
    }
    if (diff === 0) {
        return 0;
    }
    if (diff > 0) {
        return help(cnt2, cnt1, diff);
    }
    return help(cnt1, cnt2, -diff);
};

/**
 * 
 * @param {number[]} h1 比较小的hash表
 * @param {number[]} h2 比较大的hash表
 * @param {number} diff 和的差值
 */
function help(h1, h2, diff) {
  // h1要增大，每个值x 变为 min(6, x + diff), 即让diff缩减 min(6, x + diff) - x
  // h2要缩小，每个值x 变为 max(1, x - diff), 即让diff缩减 max(1, x - diff) - y

  // h[1] 表示能贡献diff减1的次数
  // 如h[1] = 2, 表示有两个数可以贡献diff减1，即diff能减少2
  const h = new Array(7).fill(0)
  for (let i = 1; i < 7; i++) {
    // 如 h2[6] 表示6的个数，即能贡献减5的个数
    h[i - 1] += h2[i]
    // 同理 h1[1] 表示1的个数，即能贡献5的个数
    h[6 - i] += h1[i]
  }

  // 最多可以贡献5 从5开始缩减
  let res = 0
  for (let i = 5; i > 0 && diff > 0; i--) {
    // 如此时 i = 5, diff < 5, 此时只需要1次就行, 除法向上取整
    // 若 i = 5, h[5] = 1, diff = 10
    // 虽然 diff / 5 = 2, 但此时只有一个可以贡献减5的, 故此时还是h[5] ,即t = 1
    // 所以这用了min
    let t = Math.min(h[i], Math.ceil(diff / i))
    res += t
    diff -= t * i
  }

  return res
}
// @lc code=end


const nums1 = [1,2,3,4,5,6]
const nums2 = [1,1,2,2,2,2]
// let nums1 = [1,1,1,1,1,1,1]
// let nums2 = [6]

const time = minOperations(nums1, nums2)

console.log(time);