// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
var getConcatenation = function(nums) {
    // Create a new array by concatenating nums with itself
    
    // Step 1: Take all elements from nums
    // Step 2: Iterate through nums again and add the same elements
    // Step 3: Return the new array containing nums + nums
    
    // Spread operator (...) is used to expand elements of nums
    // Internally, it iterates over nums and copies elements into a new array
    
    return [...nums, ...nums];
};