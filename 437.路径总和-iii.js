/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    if(root == null) return 0;
    let res = 0;
    res += path(root, targetSum);
    res += pathSum(root.left, targetSum);
    res += pathSum(root.right, targetSum)
    return res;
};

const path = (root, target) => {
    if(root == null){
        return 0;
    }
    let res = 0;
    if(root.val === target){
        res += 1;
    }
    
    res += path(root.left,target-root.val);
    res += path(root.right, target - root.val);
    
    return res;
}
// @lc code=end

