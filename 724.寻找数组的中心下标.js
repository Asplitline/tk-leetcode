/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function (nums) {
  const first = []
  const last = []
  const len = nums.length
  first[0] = 0
  last[len - 1] = 0
  for (let i = 1; i < len; i++) {
    first[i] = first[i - 1] + nums[i - 1]
  }
  for (let i = len - 2; i >= 0; i--) {
    last[i] = last[i + 1] + nums[i + 1]
  }
  let idx = -1
  for (let v = 0; v < len; v++) {
    if (first[v] === last[v]) {
      idx = v
      break
    } else if (last[v] === 0 && v === 0) {
      idx = 0
      break
    } else if (first[len - 1] === 0 && v === len - 1) {
      idx = 0
      break
    }
  }
  return idx
}
// @lc code=end
