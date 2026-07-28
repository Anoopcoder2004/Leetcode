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

// Approach
// Initialize the decimal value as 0.
// Traverse the linked list one node at a time.
// For each bit, update the current decimal value using the positional number system formula:
// newNumber = oldNumber * 2 + currentBit
// After processing all bits, return the accumulated decimal value.

function getDecimalValue(head: ListNode | null): number {
    let num:number = 0;
    while(head !== null){
        num = num * 2 + head.val;
        head = head.next; 
    }
    return num;
};

// Time complexity
// O(n)

// Space complexity
// O(1)