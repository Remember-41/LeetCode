/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
 * @return {number}
 */
var maxPathSum = function(root) {
    let max = -1000;
    const maxPath = function(root){
        if(root == null){
            return 0;
        }
        let left = Math.max(maxPath(root.left),0);
        let right = Math.max(maxPath(root.right),0);
        let path = root.val + left + right;
        max = Math.max(path, max);
        return root.val + Math.max(left, right);
    }
    maxPath(root);
    return max;

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = maxPathSum;
// @after-stub-for-debug-end