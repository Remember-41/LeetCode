/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = [];
    nums.sort((a,b)=>a-b);
    let i = 0;
    while(i<nums.length-2){
        let target = 0 - nums[i];
        let left = i + 1;
        let right = nums.length - 1;
        while(left < right){
            if(nums[left] + nums[right] === target){
                res.push([nums[i], nums[left], nums[right]]);
                left ++;
                while(nums[left] === nums[left-1]){
                    left ++;
                }
            }
            else if(nums[left] + nums[right] > target){
                right --;
            }
            else {
                left ++;
            }
        }
        i++;
        while(nums[i] === nums[i-1]){
            i++;
        }
    }
    return res;
};

let nums = [-1,0,1,2,-1,-4];
console.log(threeSum(nums))
// @lc code=ejnd

