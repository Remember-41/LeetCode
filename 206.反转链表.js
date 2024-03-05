/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let p1 = head;
    if(head === null) return null;
    if(p1.next === null) return p1;
    let p2 = p1.next;
    p1.next = null;
    while(p2!==null){
        let p = p2.next;
        p2.next = p1;
        p1 = p2;
        p2 = p;
    }
    return p1;
};
// @lc code=end

