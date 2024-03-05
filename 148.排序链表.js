/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
var sortList = function(head) {
    let arr = [];
    let p = head;
    while(p){
        arr.push(p.val);
        p = p.next;
    }
    arr.sort((a,b)=>a-b);
    p = head;
    for(let i=0;i<arr.length;i++){
        p.val = arr[i];
        p = p.next;
    }
    return head;
}
// @lc code=end

