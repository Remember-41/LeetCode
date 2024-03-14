/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(nums.length === 0) return null;
    let midNum = Math.floor((nums.length -1) / 2);
    let midNode = new TreeNode(nums[midNum]);
    midNode.left = sortedArrayToBST(nums.slice(0,midNum));
    midNode.right = sortedArrayToBST(nums.slice(midNum + 1));
    return midNode;
};
// @lc code=end

