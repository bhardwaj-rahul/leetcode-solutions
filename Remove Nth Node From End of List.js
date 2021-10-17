/**
https://leetcode.com/problems/remove-nth-node-from-end-of-list/
**/
var removeNthFromEnd = function(head, n) {
    let fast = new ListNode();
    const start = new ListNode();
    let slow = new ListNode();
    slow = head;
    fast = head;
    let counter = 1;
    while(counter <=n) {
        fast = fast.next;
        counter++;
    }
    if (!fast) {
      head = head.next;
      return headl;

    }
    while(fast && fast.next !=null) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head;
    
};
 function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

function createList(arr) {
  var head,curr;
  for(var i =0;i<arr.length;i++) {
    if (!head) {
        head = new ListNode(arr[i]);
        curr = head;
    }else {
      const temp = new ListNode(arr[i]);
      curr.next = temp;
      curr = temp;
    }
  }
  return head;
}

let head = createList([1,2]);
head = removeNthFromEnd(head, 2);
console.log(head);
