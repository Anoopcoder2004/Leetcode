// Approach

// The first half of the array contains x values.
// The second half contains y values.
// For every index i:
//      xᵢ should go to index 2 * i in the result.
//      yᵢ should go to index 2 * i + 1 in the result.

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let arr =  [];
    for(let i = 0;i < n; i++){
        arr[2 * i] = nums[i];
        arr[2 * i + 1] = nums[i + n];
    }return arr;
    
};

// Time Complexity
// O (n)

// Space Complexity
// O (n)