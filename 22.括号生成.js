/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    let track = [];

    const backtrack = (track, left, right) => {
        if(track.length === 2*n){
            res.push(track.join(''));
            return;
        }
        if(left < n){
            track.push('(');
            backtrack(track,left+1,right);
            track.pop()
        }
        if(right<left){
            track.push(')');
            backtrack(track, left, right+1);
            track.pop()
        }
    }

    backtrack(track,0, 0);
    return res;
};
// @lc code=end

