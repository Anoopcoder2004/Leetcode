/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
    let arr = new Array(nums.length);

    // Step 1: Compute running prefix sums and store them in the result array.
    // (Each value includes the current element.)
    let prefix = 0;
    for (let i = 0; i < nums.length; i++) {
        arr[i] = prefix + nums[i];
        prefix = arr[i];
    }

    // Step 2: Traverse from right to left while maintaining a running suffix sum.
    // Since both prefix and suffix include the current element,
    // nums[i] cancels out when taking the difference.
    let postfix = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        postfix += nums[i];
        arr[i] = Math.abs(arr[i] - postfix);
    }

    return arr;
};

// Time Complexity
// O(n)

// Space Complexity
// O(n)