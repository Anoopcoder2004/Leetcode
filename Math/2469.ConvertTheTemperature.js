/**
 * Approach:
 * - Convert Celsius to Kelvin using the given formula.
 * - Convert Celsius to Fahrenheit using the given formula.
 * - Return both values as an array.
 * 
 * /**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    return [celsius + 273.15, celsius * 1.80 + 32.00];
    
};

//  *
//  * Time Complexity: O(1)
//  * - Performs a constant number of arithmetic operations.
//  *
//  * Space Complexity: O(1)
//  * - Uses only a constant amount of extra space (array of size 2).
//  */