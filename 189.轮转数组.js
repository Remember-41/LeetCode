/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let t = k % nums.length;
    let arr = nums.slice(nums.length - t);
    for(let i = nums.length - 1 - t;i>=0;i--){
        nums[i+t] = nums[i];
    }
    for(let j=0;j<t;j++){
        nums[j] = arr[j];
    }
};
let nums = [1,2,3,4,5,6,7];
let k = 3;
console.log(rotate(nums,k))
// @lc code=end

