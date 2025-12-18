// 1. Store all numbers in a Set for O(1) lookups
// 2. Initialize a variable to keep track of the longest sequence length
// 3. Loop through each number in the Set(here set is used instead of array to avoid counting of duplicates)
// 4. Check if the current number is the start of a sequence
//    (i.e., the previous number does not exist in the Set)
// 5. If it is a start, initialize current number and count
// 6. Expand the sequence by checking consecutive numbers (current + 1)
// 7. Update the longest sequence length if the current count is greater
// 8. Return the longest sequence length after checking all numbers
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    const set = new Set(nums);
    let longest = 0;
    for (let num of set) {
        if (!set.has(num - 1)) {
            let current = num;
            let count = 1;

            while (set.has(current + 1)) {
                current++;
                count++;
            }
            longest = Math.max(longest, count);
        }
    } return longest;
};
