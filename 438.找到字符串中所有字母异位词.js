/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let res = [];
    let need = {};
    let window = {};

    for(let i=0;i<p.length;i++){
        if(need[p[i]] !== undefined){
            need[p[i]] ++;
        }
        else {
            need[p[i]] = 1;
        }
    }
    let length = Object.keys(need).length;

    let left = 0;
    let right = 0;
    let valid = 0;

    while(right < s.length){
        let t = s[right];
        right ++;
        if(need[t]!==undefined){
            if(window[t]!==undefined){
                window[t] += 1;
            }
            else{
                window[t] = 1;
            }
            if(need[t] === window[t]){
                valid ++;
            }
        }
        
        
        while(right - left >= p.length){
            if(valid == length){
                res.push(left);
            }
            let n = s[left];
            left ++;
            if(need[n] !== undefined){
                if(window[n] === need[n]){
                    valid --;
                }
                window[n] --;
            }
        }
    }
    return res;
};

let s = "cbaebabacd";
let p = "abc";
console.log(findAnagrams(s,p));
// @lc code=end

