/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [];
    let track = [];
    let sum = 0;
    const backtrack = (track, sum, start) => {
        if(sum>=target){
            if(sum === target){
                res.push([...track])
            };
            return; 
        }
        for(let i=start;i<candidates.length;i++){
            track.push(candidates[i]);
            sum += candidates[i];
            // console.log(track, sum)
            backtrack(track, sum, i);
            track.pop();
            sum -= candidates[i];
        }
    }
    backtrack(track,sum, 0);
    return res;
};

// let candidates = [2,3,5];
// let target = 8;
// console.log(combinationSum(candidates,target))
// @lc code=end

