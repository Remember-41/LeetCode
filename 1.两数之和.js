/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (hashMap[target - nums[i]] !== undefined) {
      return [hashMap[target - nums[i]], i];
    } else {
      hashMap[nums[i]] = i;
    }
  }
};
