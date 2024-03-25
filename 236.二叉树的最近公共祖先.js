/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let map = new Map();
    const dfs = (root) => {
        if(root === null) return;
        if(root.left){
            map.set(root.left.val, root);
            dfs(root.left);
        }
        if(root.right){
            map.set(root.right.val, root);
            dfs(root.right);
        }
    }
    dfs(root);
    let visited = new Set();
    while(p){
        visited.add(p);
        p = map.get(p.val);
    }
    while(q){
        if(visited.has(q)){
            return q;
        }
        else{
            q = map.get(q.val);
        }
    }
};
// @lc code=end

