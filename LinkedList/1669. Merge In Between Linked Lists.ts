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

//  Approach
// Find the node just before index 'a'
// Find the node just after index 'b'
// Find the last node (tail) of list2
// Connect beforeA to the head of list2
// Connect the tail of list2 to afterB
// Return the original head since it never changes

function mergeInBetween(list1: ListNode | null, a: number, b: number, list2: ListNode | null): ListNode | null {

    let beforeA = list1;
    for(let i = 0; i < a - 1; i++){
        beforeA = beforeA!.next;
    }
    let afterB = beforeA;
    for(let i = 0; i < b - a + 2; i++){
        afterB = afterB!.next;
    }
    let tail = list2;
    while(tail!.next){
        tail = tail!.next;
    }
    beforeA!.next = list2;
    tail!.next = afterB;
    return list1;
};
// Time complexity
// O(n + m)

// Space complexity
// O(1)