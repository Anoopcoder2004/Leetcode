// Approach 
// Just return the args.length

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    return args.length;
    
};

/**
 * argumentsLength(1, 2, 3); // 3
 */

// Time complexity
// O(1)

// Space complexity
// O(n)
    // - Rest parameter (...args) creates a new array
    // - All passed arguments are copied into this array
    // - If n arguments are passed → array size = n