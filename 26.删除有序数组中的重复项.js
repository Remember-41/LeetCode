/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 0 || nums.length === 1){
        return nums.length;
    }
    let slow = 0;
    let fast = 1;
    for(let i=0;i<nums.length;i++){
        if(nums[fast] === nums[slow]){
            fast ++;
        }
        else {
            slow ++;
            nums[slow] = nums[fast];
            fast ++;
        }
    }
    return slow;
};

// let nums = [1];
// console.log(removeDuplicates(nums));
// @lc code=end

