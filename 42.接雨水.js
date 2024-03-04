/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let res = 0;
    let left = 0;
    let right = height.length - 1;
    let lmax = 0;
    let rmax = 0;
    while(left < right){
        lmax = Math.max(lmax, height[left]);
        rmax = Math.max(rmax, height[right]);

        if(lmax < rmax){
            res += lmax - height[left];
            left ++;
        }
        else {
            res += rmax - height[right];
            right --;
        }
    }
    return res;
};

let height = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap(height));
// @lc code=end

