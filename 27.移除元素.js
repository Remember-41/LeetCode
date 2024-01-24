/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let p = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!== val){
            nums[i-p] = nums[i];
        }
        else {
            p++;
        }
    }
    return nums.length - p;
};

let nums = [0,1,2,2,3,0,4,2];
console.log(removeElement(nums, 2));
console.log(nums);
// @lc code=end

