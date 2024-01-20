/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 */

const ListNode = require("./ListNode");

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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let list1 = new ListNode(-1);
    let list2 = new ListNode(-1);
    let p1 = list1;
    let p2 = list2;
    while(head !== null){
        if(head.val < x){
            list1.next = head;
            list1 = list1.next;
        }
        else {
            list2.next = head;
            list2 = list2.next;
        }
        let temp = head.next;
        head.next = null;
        head = temp;
        
    }
    list1.next = p2.next;
    return p1.next;
};

let nums = [1,4,3,2,5,2]
let x = 3;
let head = ListNode.createFromArray(nums);
console.log(partition(head, x).toString());
// @lc code=end

