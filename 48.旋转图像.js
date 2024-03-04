/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length - 1;
    let row = 0;
    let j = 0;
    while(row<n/2){
        for(let i= row;i<n-row;i++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[n-j][i];
            matrix[n-j][i] = matrix[n-i][n-j];
            matrix[n-i][n-j] = matrix[j][n-i];
            matrix[j][n-i] = temp;
        }
        row++;
        j++
    }
};
let matrix = [[1,2,3],[4,5,6],[7,8,9]];
rotate(matrix);
console.log(matrix);
// @lc code=end

