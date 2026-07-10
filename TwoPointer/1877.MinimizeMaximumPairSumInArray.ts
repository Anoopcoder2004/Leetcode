// Approach:
// 1. Sort the array in ascending order.
// 2. Pair the smallest numbers with the largest numbers.
// 3. Traverse from the middle outward and compute the maximum pair sum.
// 4. Return the maximum pair sum among all pairs.
//
function minPairSum(nums: number[]): number {
    nums.sort((a, b) => a - b);
    let n: number = nums.length;
    let left: number = n / 2 - 1;
    let right: number = n / 2;
    let min: number = 0;
    while (left >= 0) {
        min = Math.max(nums[left] + nums[right], min);
        left--;
        right++;
    } return min;
};

// Time Complexity: O(n log n)
// - Sorting: O(n log n)
// - Pair traversal: O(n)
// Overall: O(n log n)
//
// Space Complexity:
// - O(1) extra space excluding the built-in sort implementation.
// - The built-in JavaScript sort may use additional memory depending on the engine.

