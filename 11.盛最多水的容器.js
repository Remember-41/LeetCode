/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length -1;
    let max = (right - left) * Math.min(height[left], height[right]);
    while(left !== right){
        if(height[left] < height[right]){
            left ++;
        }
        else right --;
        max = Math.max(max,(right - left) * Math.min(height[left], height[right]));
    }
    return max;
};

let height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height))
// @lc code=end

