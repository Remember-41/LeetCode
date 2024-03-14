/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function(root) {

    const isValid = function(root, min, max){
       if(root === null) return true;
       if(root.val <= min || root.val >= max){
            return false;
       }
       return isValid(root.left, min , root.val) && isValid(root.right, root.val, max)
    }
    return isValid(root, -Infinity, Infinity)
};

// @lc code=end

