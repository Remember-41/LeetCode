/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length === 1) return nums[0];
    let dp = [];
    dp[0] = nums[0];
    for(let i=1;i<nums.length;i++){
        if(dp[i-1]>0){
            dp[i] = dp[i-1]+nums[i];
        }
        else {
            dp[i] = nums[i];
        }
    }
    dp.sort((a,b)=>b -a);
    return dp[0];
};
// @lc code=end

