/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let res = 0;
    let left = 0;
    let right = 0;
    let window = {};
    while (right < s.length){
        let t = s[right];
        right ++;
        if(window[t] !== undefined){
            window[t] ++;
        }
        else {
            window[t] = 1;
        }
        while(window[t] > 1){
            window[s[left]]--;
            left ++
        }
        res = Math.max(res, right -left);
    }
    return res;
};

let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s))
// @lc code=end

