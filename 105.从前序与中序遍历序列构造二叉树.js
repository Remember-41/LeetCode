/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder.length === 1 && inorder.length === 1){
        return new TreeNode(preorder[0]);
    }
    if(preorder.length === 0 && inorder.length === 0){
        return null;
    }
    let root = new TreeNode(preorder[0]);
    let index = inorder.indexOf(preorder[0]);
    root.left = buildTree(preorder.slice(1,index+1),inorder.slice(0,index));
    root.right = buildTree(preorder.slice(index+1),inorder.slice(index+1));
    return root;
};

// @lc code=end

