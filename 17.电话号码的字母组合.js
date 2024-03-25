/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const letters = [,,"abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
    let res = [];
    let track = [];
    if(digits.length === 0) return [];
    const backtrack = (digits, track, current)=>{
        if(current === digits.length){
            res.push(track.join(''));
            return
        }
        let str = letters[parseInt(digits[current])];
        for(let i=0;i<str.length;i++){
            track.push(str[i]);
            current ++;
            backtrack(digits, track, current);
            track.pop();
            current --;
        }

    }
    backtrack(digits,track,0);
    return res;
};

// let digits = '23';
// console.log(letterCombinations(digits))
// @lc code=end

