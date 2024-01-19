class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }

    // 链表节点的构造函数
    // 使用 arr 为参数，创建一个链表，当前的 ListNode 为链表头节点
    static createFromArray(arr) {
        if (!arr || arr.length === 0) {
            throw new Error("Array cannot be empty");
        }

        let head = new ListNode(arr[0]);
        let current = head;

        for (let i = 1; i < arr.length; i++) {
            current.next = new ListNode(arr[i]);
            current = current.next;
        }

        return head;
    }

    // 以当前节点为头节点的链表信息字符串，方便查看
    toString() {
        let res = [];
        let current = this;

        while (current !== null) {
            res.push(current.val);
            current = current.next;
        }

        res.push("NULL");
        return res.join("->");
    }
}

module.exports =  ListNode;
