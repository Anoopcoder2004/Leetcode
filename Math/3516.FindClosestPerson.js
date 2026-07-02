// Approach

// find the diff bw person 1 to person 3 and person 2 to person 3 . 
// compare the difference and determine the answer and return the number

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    if (Math.abs(z - x) < Math.abs(z-y)){
        return 1;
    }else if (Math.abs(z - x) > Math.abs(z-y)){
        return 2;
    }else{
        return 0;
    }
    
};

// Time Complexity: O(1)
// - Performs a constant number of arithmetic operations and comparisons.
//
// Space Complexity: O(1)
// - Uses only constant extra space; no additional data structures are created.