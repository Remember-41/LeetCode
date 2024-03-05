/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode();
    let p = dummy;
    let p1 = l1;
    let p2 = l2;
    let flag = 0;
    while(p1!==null||p2!==null){
        let n1 = p1===null?0:p1.val;
        let n2 = p2===null?0:p2.val;
        let n = n1+n2+flag;
        if(n<10){
            p.next = new ListNode(n);
            flag = 0;
        }
        else{
            p.next = new ListNode(n-10);
            flag = 1;
        }
        if(p1!==null) p1 = p1.next;
        if(p2!==null) p2 = p2.next;
        p = p.next;
    }
    if(flag === 1){
        p.next = new ListNode(1);
    }
    return dummy.next;
};
// @lc code=end

