/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function(root) {
    if(root === null) return true;
    if(root.left === null && root.right === null) return true;
    if(!(root.left&&root.right)) return false;
    return symmetric(root.left, root.right)
};

const symmetric = function(t1, t2){
    if(t1===null && t2===null){
        return true;
    }
    else if(t1===null||t2===null){
        return false;
    }
    if(t1.val !== t2.val){
        return false;
    }
    if(t1.left === null && t1.right === null && t2.left === null && t2.right === null){
        return true;
    }
    return symmetric(t1.left,t2.right)&&symmetric(t1.right,t2.left)

}

// @lc code=end

