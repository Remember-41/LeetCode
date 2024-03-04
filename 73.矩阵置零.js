/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let row = [];
    let col = [];
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(matrix[i][j] === 0){
                row.push(i);
                col.push(j);
            } 
        }
    };
    for(let i=0;i<matrix.length;i++){
        if(row.includes(i)){
            for(let j=0;j<matrix[i].length;j++){
                matrix[i][j] = 0
            }
        }
        else{
            for(let j=0;j<matrix[i].length;j++){
                if(col.includes(j)){
                    matrix[i][j] = 0;
                }
            }
        }
    }
};
// @lc code=end

