/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(amount+1);
    dp[0] = 0

    for(let i = 1;i<=amount+1;i++){
        for(let coin of coins){
            if(i - coin < 0) continue;
            dp[i] = Math.min(dp[i], dp[i-coin]+1);
        }
    }
    console.log(dp);
    return dp[amount] === amount+1? -1:dp[amount];
};
// @lc code=end
console.log(coinChange([1,2,5],11))
