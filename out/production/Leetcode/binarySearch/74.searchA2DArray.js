/**
 * Approach:
 * -----------------
 * We are performing a Binary Search on a 2D matrix that has the following properties:
 * 1. Each row is sorted in non-decreasing order.
 * 2. The first element of each row is greater than the last element of the previous row.
 * 
 * This allows us to treat the 2D matrix as a **flattened 1D sorted array** of size m * n.
 * 
 * Steps:
 * 1. Let m = number of rows, n = number of columns.
 * 2. Initialize two pointers for 1D binary search:
 *    - left = 0 (start of virtual array)
 *    - right = m * n - 1 (end of virtual array)
 * 
 * 3. While left <= right:
 *    - Calculate the middle index in 1D: midIndex = left + Math.floor((right - left) / 2)
 *    - Map midIndex to 2D indices:
 *       row = Math.floor(midIndex / n)  → integer division gives row
 *       col = midIndex % n              → remainder gives column
 *    - Access the element: midValue = matrix[row][col]
 *    - Compare midValue with target:
 *       a) If midValue === target → return true
 *       b) If midValue < target → search right half (left = midIndex + 1)
 *       c) If midValue > target → search left half (right = midIndex - 1)
 * 
 * 4. If the loop ends without finding target → return false
 * 
 * Time Complexity: O(log(m * n)) → binary search halves the search space every iteration
 * Space Complexity: O(1) → only a few variables are used
 */



var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;
    let left = 0;
    let right = (m * n) - 1;
    while(left <= right){
        let midIndex = left + Math.floor((right-left)/2);
        //mid value
        let row = Math.floor(midIndex / n);
        let col = midIndex % n;
        let midValue = matrix[row][col];
        if(midValue === target){
            return true;
        }else if(midValue < target){
            left = midIndex + 1;
        }else{
            right = midIndex - 1;
        }
    }return false;
};