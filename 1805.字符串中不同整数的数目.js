/*
 * @lc app=leetcode.cn id=1805 lang=javascript
 *
 * [1805] 字符串中不同整数的数目
 *
 * https://leetcode.cn/problems/number-of-different-integers-in-a-string/description/
 *
 * algorithms
 * Easy (45.81%)
 * Likes:    42
 * Dislikes: 0
 * Total Accepted:    20.6K
 * Total Submissions: 46.3K
 * Testcase Example:  '"a123bc34d8ef34"'
 *
 * 给你一个字符串 word ，该字符串由数字和小写英文字母组成。
 * 
 * 请你用空格替换每个不是数字的字符。例如，"a123bc34d8ef34" 将会变成 " 123  34 8  34"
 * 。注意，剩下的这些整数为（相邻彼此至少有一个空格隔开）："123"、"34"、"8" 和 "34" 。
 * 
 * 返回对 word 完成替换后形成的 不同 整数的数目。
 * 
 * 只有当两个整数的 不含前导零 的十进制表示不同， 才认为这两个整数也不同。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：word = "a123bc34d8ef34"
 * 输出：3
 * 解释：不同的整数有 "123"、"34" 和 "8" 。注意，"34" 只计数一次。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：word = "leet1234code234"
 * 输出：2
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：word = "a1b01c001"
 * 输出：1
 * 解释："1"、"01" 和 "001" 视为同一个整数的十进制表示，因为在比较十进制值时会忽略前导零的存在。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * word 由数字和小写英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {

  // 双指针
  let p1 = 0
  let p2 = 0
  const n = word.length
  const set = new Set()

  function isDigit(ch) {
    return '0' <= ch && '9' >= ch
  }

  while(true) {
    while(p1 < n && !isDigit(word[p1])) {
      p1++
    }

    if (p1 === n) break

    p2 = p1

    while(p2 < n && isDigit(word[p2])) {
      p2++
    }

    while((p2 - p1) > 1 && word[p1] === '0') 
      // 至少一位，同时确保吧前面多余的0去掉
      p1++
    }

    set.add(word.slice(p1, p2))
    p1 = p2
  }


  return set.size



  // function trimZero(str) {
  //   for (let i = 0; i < str.length; i++) {
  //     if (str[i] !== '0') return str.slice(i)
  //   }
  //   return '0'
  // }

  // let ans = 0
  // let cur = ''
  // let map = {}
  // for (let i = 0; i < word.length; i++) {
  //   if (/[0-9]/.test(word[i])) {
  //     cur += `${word[i]}`
  //   } else if (cur !== '') {
  //     cur = trimZero(cur)
  //     if (!map[cur]) {
  //       map[cur] = true
  //       ans++
  //     }
  //     cur = ''
  //   }
  // }
  // if (cur !== '') {
  //   cur = trimZero(cur)
  //   if (!map[cur]) {
  //     map[cur] = true
  //     ans++
  //   }
  // }
  // return ans
};
// @lc code=end

// let word = '2393706880236110407059624696967828762752651982730115221690437821508229419410771541532394006597463715513741725852432559057224478815116557380260390432211227579663571046845842281704281749571110076974264971989893607137140456254346955633455446057823738757323149856858154529105301197388177242583658641529908583934918768953462557716z97438020429952944646288084173334701047574188936201324845149110176716130267041674438237608038734431519439828191344238609567530399189316846359766256507371240530620697102864238792350289978450509162697068948604722646739174590530336510475061521094503850598453536706982695212493902968251702853203929616930291257062173c79487281900662343830648295410'
let word = '0a0'
const ans = numDifferentIntegers(word)
console.log(ans);

