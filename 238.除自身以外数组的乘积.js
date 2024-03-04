/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let left = [];
    let right = [];
    left[0] = 1;
    right[nums.length -1] = 1;
    for(let i=1;i<nums.length;i++){
        left[i] = left[i-1]*nums[i-1];
    }
    for(let j=nums.length - 2;j>=0;j--){
        right[j] = right[j+1]*nums[j+1];
    }
    let res = [];
    for(let p=0;p<nums.length;p++){
        res[p] = left[p]*right[p];
    }
    return res;
};

let nums = [1,2,3,4];
console.log(productExceptSelf(nums));
// @lc code=end

