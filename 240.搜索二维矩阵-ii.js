/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let x = 0;
    let y = matrix[0].length -1;
    while(x<matrix.length&&y>=0){
        if(matrix[x][y] === target){
            return true;
        }
        else if(matrix[x][y]>target){
            y--;
        }
        else if(matrix[x][y] < target){
            x++;
        }
    }
    return false;
};
// @lc code=end

