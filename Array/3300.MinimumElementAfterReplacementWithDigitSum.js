

// Approach
// 1. Initialize `min` to `Infinity`.
// 2. Traverse each number in the array.
// 3. Convert the current number to a string.
// 4. Iterate through each digit and calculate its digit sum.
// 5. Update `min` with the smaller of the current minimum and the calculated digit sum.
// 6. Return `min` after processing all numbers.

/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    let min = Infinity;
    for(let num of nums){
        let sum = 0;
        for(let digit of num.toString()){
            sum += Number(digit);
        }
        min = Math.min(min, sum);
    }return min;
};

// // Time Complexity: O(n × k)
// // n = number of elements in the array
// // k = average number of digits per number

// // Space Complexity: O(1)