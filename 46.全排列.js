/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    let track = [];
    let choosed = new Array(nums.length).fill(false);

    const backtrack = function(nums, track, choosed){
        if(track.length === nums.length){
            res.push([...track]);
            return;
        }

        for(let i=0;i<nums.length;i++){
            if(choosed[i]){
                continue;
            }
            track.push(nums[i]);
            choosed[i] = true;
            backtrack(nums, track, choosed);
            choosed[i] = false;
            track.pop()
        }
    }

    backtrack(nums, track, choosed);
    return res;
};

let nums = [1]
console.log(permute(nums))
// @lc code=end