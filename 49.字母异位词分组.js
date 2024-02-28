/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hash = {};
    for(let i=0;i<strs.length;i++){
        let sorted = Array.from(strs[i]);
        sorted.sort();
        if(hash[sorted] !== undefined){
            hash[sorted].push(strs[i]);
        }
        else {
            hash[sorted] = [strs[i]];
        }
    }
    return Object.values(hash);
};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
// @lc code=end

