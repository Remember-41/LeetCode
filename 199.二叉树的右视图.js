/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let res = [];
    let maxheight = 0;
    let h = 1;
    const dfs = (root, h) => {
        if(root === null) return;
        if(h > maxheight){
            res.push(root.val);
            maxheight += 1;
        }
        h++;
        dfs(root.right, h);
        dfs(root.left, h);
    }
    dfs(root,h);
    return res;
};
// @lc code=end

