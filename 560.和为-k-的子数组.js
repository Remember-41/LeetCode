/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let ans = 0;
    let pre = 0;
    let hash = {};
    hash[0] = 1;
    for(let i=0;i<nums.length;i++){
        pre += nums[i];
        if(hash[pre-k]!==undefined){
            ans += hash[pre-k];
        }
        if(hash[pre] !== undefined){
            hash[pre] ++;
        }
        else{
            hash[pre] = 1;
        }
    }
    return ans;
};

let nums = [1,2,3];
let k = 3;
console.log(subarraySum(nums, k));
// @lc code=end

