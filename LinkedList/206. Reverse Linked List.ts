/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// Approach:
// 1. Use three pointers:
//    - prev: points to the previous node (initially null).
//    - curr: points to the current node (initially head).
//    - nextNode: temporarily stores the next node so the remaining list isn't lost.
// 2. Traverse the list while curr is not null.
// 3. For each node:
//    - Save curr.next in nextNode.
//    - Reverse the link by making curr.next point to prev.
//    - Move prev one step forward to curr.
//    - Move curr one step forward to nextNode.
// 4. When the traversal finishes, prev points to the new head of the reversed list.
// 5. Return prev.


function reverseList(head: ListNode | null): ListNode | null {

    let prev:ListNode | null = null;
    let curr:ListNode | null = head;
    
    while(curr){
        const nextNode :ListNode | null = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }
    return prev;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
