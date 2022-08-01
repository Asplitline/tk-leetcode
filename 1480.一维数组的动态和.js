/**
 * @param {number[]} nums
 * @return {number[]}
 */

// https://leetcode.cn/problems/running-sum-of-1d-array/

var runningSum = function (nums) {
  const len = nums.length
  const result = []
  result[0] = nums[0]
  for (let i = 1; i < len; i++) {
    result[i] = result[i - 1] + nums[i]
  }
  return result
}
