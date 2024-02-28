/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length == 0) return 0;
    nums.sort((a,b)=>a-b);
    nums = Array.from(new Set(nums))
    let slow = 0;
    let fast = 1;
    let res = 1;
    let max = 1;
    while(fast < nums.length){
        if(nums[fast]-nums[slow] == max){
            fast ++;
            max ++;
        }
        else{
            slow = fast;
            fast ++;
            res = Math.max(res,max);
            max = 1;
        }
    }
    return Math.max(res, max);
};

let nums = [1,2,0,1];
console.log(longestConsecutive(nums))
// @lc code=end

