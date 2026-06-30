// Approach

// Find reverse
// Calculate  abs(n - reverse(n)) and return

/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    let rev = 0;
    let last = 0;
    let ref = n;
    while(ref > 0){
        last = ref % 10;
        rev = 10 * rev + last;
        ref = Math.floor(ref /10);
    }
    let mirror = Math.abs(n - rev);
    return mirror;
};

// Each iteration removes one digit.
// A number with n as its value has log₁₀(n) digits.

// Time Complexity
// O(log n)

// Space Complexity 
// O (1)