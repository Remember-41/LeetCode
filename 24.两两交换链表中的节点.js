/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function(head) {
    if(head===null||head.next===null){
        return head;
    }
    let left = head;
    let right = head.next;
    while(left!==null && right!==null){
        let temp = left.val;
        left.val = right.val;
        right.val = temp;
        if(left.next!==null){
            left = left.next.next;
        }
        if(right.next!==null){
            right = right.next.next;
        }
    }
    return head;
};
// @lc code=end

