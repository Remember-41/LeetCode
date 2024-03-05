/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 随机链表的复制
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if(!head) return head;

    let p=head;
    let map = new Map();

    while(p){
        map.set(p, new Node(p.val));
        p = p.next;
    }

    p=head;
    while(p){
        map.get(p).next = map.get(p.next) || null;
        map.get(p).random = map.get(p.random) || null;
        p = p.next;
    }
    return map.get(head);
};
// @lc code=end

