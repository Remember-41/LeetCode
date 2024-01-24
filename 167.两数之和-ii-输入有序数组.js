/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length -1;
    while(left < right){
        if(numbers[left] + numbers[right] == target){
            return [left+1, right+1];
        }
        else if(numbers[left] + numbers[right] < target){
            left ++; 
        }
        else {
            right --;
        }
    }
};

let numbers = [2,7,9,18];
console.log(twoSum(numbers, 9))
// @lc code=end


// @after-stub-for-debug-begin
module.exports = twoSum;
// @after-stub-for-debug-end