/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */

// const ListNode = require('./ListNode')
var removeNthFromEnd = function(head, n) {
    if(head.next === null&& n===1){
        return null;
    }
    let p1 = head;
    let p2 = p1;
    let p = p1;
    let temp = new ListNode();
    for(let i=0;i<n;i++){
        p2 = p2.next;
    }

    if(p2 === null){
        return head.next;
    }
    
    while(p2 !== null){
        temp = p1;
        p1 = p1.next;
        p2 = p2.next;
    }

    temp.next = p1.next;
    return p;
    
};

// let nums = [1];
// let n = 1;
// let list = ListNode.createFromArray(nums);
// console.log(removeNthFromEnd(list, n).toString());
// @lc code=end

