// Approach

// Iterate through each num and check if num is odd then push 0 to the array.
// Add the remaining elements as 1 untill the array is filled.

 /**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
    let result = new Array(nums.length);
    let index = 0;
    for(num of nums){
        if(num % 2 === 0){
            result[index++] = 0;
        }
    }
    while(index < nums.length){
        result[index++] = 1;
    }
     return result;
};

//Time complexity
// O(n)

// Space complexity
// O(n)