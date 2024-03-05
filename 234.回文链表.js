/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let arr = [];
    let p = head;
    while(p!==null){
        arr.push(p.val);
        p = p.next;
    }
    let left = 0;
    let right = arr.length -1;
    while(left < right){
        if(arr[left]!==arr[right]){
            return false;
        }
        else{
            left ++;
            right --;
        }
    }
    return true;
};
// @lc code=end

