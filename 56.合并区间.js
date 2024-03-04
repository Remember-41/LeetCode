/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let res = [];
    intervals.sort((a,b)=>{
        return a[0] - b[0]
    })
    res.push(intervals[0]);
    for(let i=0;i<intervals.length;i++){
        let arr = res[res.length-1];
        if(intervals[i][0]>arr[1]){
            res.push(intervals[i]);
        }
        else{
            res[res.length-1][1] = Math.max(arr[1],intervals[i][1]);
        }
    }
    return res;
};

let intervals = [[1,3],[4,5], [0,0]];
console.log(merge(intervals))
// @lc code=end

