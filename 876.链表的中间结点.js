/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
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

// const ListNode = require("./ListNode")
var middleNode = function(head) {
    let fast = head;
    let slow = head;
    while(fast!==null&&fast.next!==null){
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
};

// let head = [1,2,3,4,5]
// let list = ListNode.createFromArray(head);
// console.log(middleNode(list).toString());
// @lc code=end

