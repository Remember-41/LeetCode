/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    envelopes.sort((a,b)=>{
        if(a[0] === b[0]){
            return b[1] - a[1];
        }
        else return a[0] - b[0]
    })

    let height = [];
    envelopes.forEach(envelop =>{
        height.push(envelop[1]);
    })

    return lengthOfLIS(height);

};

var lengthOfLIS = function(nums) {
    if(nums.length === 1) return 1;
    let dp = new Array(nums.length).fill(1);
    dp[0] = 1;
    for(let i=1;i<nums.length;i++){
        for(let j=0;j<i;j++){
            if(nums[j]<nums[i]){
                dp[i] = Math.max(dp[i], dp[j]+1);
            }
        }
    }
    let res = 1;
    for(let i=0;i<nums.length;i++){
        res = Math.max(res, dp[i]);
    }
    return res;
};
// @lc code=end

