/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let map = new Map();
    let n = 0;
    const f = function(root, n){
        if(root === null) return
        if(!map.has(n)){
            map.set(n,[root.val]);
        }
        else{
            map.get(n).push(root.val);
        }
        n++;
        f(root.left, n);
        f(root.right, n);
    }
    f(root, n)
    return [...map.values()]
};
// @lc code=end

