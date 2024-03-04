/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let top = 0;
    let left = 0;
    let bottom = matrix.length - 1;
    let right = matrix[0].length - 1;
    let res = [];
    while(left<=right && top<=bottom){
        for(let i=left;i<=right;i++){
            res.push(matrix[top][i]);
        }
        for(let i=top+1;i<=bottom;i++){
            res.push(matrix[i][right]);
        }
        if(left<right&&top<bottom){
            for(let i=right-1;i>=left;i--){
                res.push(matrix[bottom][i]);
            }
            for(let i=bottom-1;i>=top+1;i--){
                res.push(matrix[i][left]);
            }
        }
        
        left++;
        right--;
        top++;
        bottom--;
    }
    return res;
};

let matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(spiralOrder(matrix));
// @lc code=end

