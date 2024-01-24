/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let fast = 0;
    let slow = 0;
    while(fast < nums.length){
        if(nums[fast] !== 0){
            nums[slow] = nums[fast];
            slow ++
        }
        fast ++;
    }
    for(let i = slow;i<nums.length;i++){
        nums[i] = 0;
    }
};
let nums = [0,1,0,3,12];
moveZeroes(nums)
console.log(nums);
// @lc code=end

