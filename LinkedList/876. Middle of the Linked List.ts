

//  * Approach:
//  * - Use two pointers: slow and fast.
//  * - Both pointers start at the head.
//  * - Slow moves one node at a time.
//  * - Fast moves two nodes at a time.
//  * - When fast reaches the end of the list,
//  *   slow will be at the middle node.
//  * - For an even-length list, this returns
//  *   the second middle node.

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

function middleNode(head: ListNode | null): ListNode | null {
    let slow = head;
    let fast = head;
    while(fast !== null && fast.next !== null){
        slow = slow!.next;
        fast = fast.next.next;
    } return slow;
    
};


// O(n/2)

// But in Big-O notation, we ignore constant factors:

// O(n/2) = O(n)
// O(2n)  = O(n)
// O(100n)= O(n)

// because as n grows, the constant doesn't change the growth rate.

// Therefore:

// Time Complexity = O(n)
// Space Complexity = O(1)