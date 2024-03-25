/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let res='';
    let timesStack = [];
    let strStack = [];
    let count = 0;

    for(let i=0;i<s.length;i++){
        if(!isNaN(s[i])){
            count = count*10 + parseInt(s[i]);
        }
        else if(s[i]==='['){
            strStack.push(res);
            res = '';
            timesStack.push(count);
            count = 0;
        }
        else if(s[i]===']'){
            let times = timesStack.pop()
            res = strStack.pop()+res.repeat(times);
        }
        else{
            res+=s[i];
        }

    }
    return res;

};

console.log(null instanceof Object)

// @lc code=end

