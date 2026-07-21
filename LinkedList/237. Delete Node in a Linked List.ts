// *
//  * Approach:
//  * - We are given the node to delete directly.
//  * - Since we do not have access to the head or previous node,
//  *   we cannot remove the node in the usual way.
//  * - Copy the value of the next node into the current node.
//  * - Then skip the next node by updating the next pointer.
//  * - This makes the current node behave as if it was deleted.
//  *

function deleteNode(node: ListNode | null): void {
    node!.val = node!.next!.val;
    node!.next = node!.next!.next;
}


//Time Complexity: O(1)
//Space Complexity: O(1)
