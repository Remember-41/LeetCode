/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let start = [];
    let ans = false;

    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[0].length;j++){
            if(board[i][j] === word.charAt(0)){
                start.push([i,j]);
            }
        }
    }
    // console.log(start)
    const backtrack = (i,j,index, choosed, track) => {
        if(track.length === word.length){
            ans = true;
            return;
        }
        if(i+1<board.length && board[i+1][j]===word.charAt(index)){
            if(!choosed.some(item=>item[0]===i+1&&item[1]===j)){
                track.push(board[i+1][j]);
                choosed.push([i+1,j]);
                backtrack(i+1,j,index+1,choosed, track);
                track.pop();
                choosed.pop();
            }
        }
        if(j+1<board[0].length && board[i][j+1]===word.charAt(index)){
            if(!choosed.some(item=>item[0]===i&&item[1]===j+1)){
                track.push(board[i][j+1]);
                choosed.push([i,j+1]);
                backtrack(i,j+1,index+1,choosed, track);
                track.pop();
                choosed.pop();
            }
        }
        if(i>=1 && board[i-1][j]===word.charAt(index)){
            if(!choosed.some(item=>item[0]===i-1&&item[1]===j)){
                track.push(board[i-1][j]);
                choosed.push([i-1,j]);
                backtrack(i-1,j,index+1,choosed, track);
                track.pop();
                choosed.pop();
            }
        }
        if(j>=1 && board[i][j-1]===word.charAt(index)){
            if(!choosed.some(item=>item[0]===i&&item[1]===j-1)){
                track.push(board[i][j-1]);
                choosed.push([i,j-1]);
                // console.log(track,choosed)
                backtrack(i,j-1,index+1,choosed, track);
                track.pop();
                choosed.pop();
            }
        }

    }
    
    for(let i=0;i<start.length;i++){
        backtrack(start[i][0], start[i][1], 1, [[start[i][0], start[i][1]]], [word.charAt(0)]);
        if(ans === true) return true;
    }
    return ans;


};

let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
let word = "ABCCED";
console.log(exist(board,word))
// @lc code=end

