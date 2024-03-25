/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack = [[Infinity,-1]];
    let ans = new Array(temperatures.length).fill(0);
    for(let i=0;i<temperatures.length;i++){
        while(temperatures[i]>stack[stack.length-1][0]){
            let temp = stack.pop();
            ans[temp[1]] = i-temp[1];
        }

        stack.push([temperatures[i],i])
        
    }
    return ans
};

// let temperatures = [73,74,75,71,69,72,76,73];
// console.log(dailyTemperatures(temperatures))


// @lc code=end

