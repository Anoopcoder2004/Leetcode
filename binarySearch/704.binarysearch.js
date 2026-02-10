/**
 * Approach:
 * -----------------
 * We are performing a Binary Search on a sorted array `nums` to find the `target`.
 * 
 * 1. Initialize two pointers:
 *    - `left` = 0 (start of the array)
 *    - `right` = nums.length - 1 (end of the array)
 * 
 * 2. Loop while `left <= right`:
 *    - Calculate the middle index: mid = left + Math.floor((right - left) / 2)
 *      (This prevents potential overflow in other languages)
 *    - Compare nums[mid] with target:
 *       a) If nums[mid] === target → return mid (found the target)
 *       b) If nums[mid] < target → search in the right half (left = mid + 1)
 *       c) If nums[mid] > target → search in the left half (right = mid - 1)
 * 
 * 3. If the loop ends and we haven't returned, the target is not in the array → return -1
 * 
 * Time Complexity: O(log n) → we halve the search space every iteration
 * Space Complexity: O(1) → only pointers are used, no extra space
 */

var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    while(left<=right){
        let mid= left+Math.floor((right-left)/2);
        if (nums[mid]=== target){
            return mid;
            
        }else if(nums[mid] < target){
            left= mid+1;
        }else{
            right= mid-1;
        }
    }return -1;

    
};