/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {

    let labTests = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (labTests.has(nums[i])) {
            labTests.set(nums[i], labTests.get(nums[i]) + 1);
        }
        else {
            labTests.set(nums[i], 1)
        }
    }

    let culprits = [];

    for (let [test, count] of labTests) {
        if (count === 2) {
            culprits.push(test);
        }
    }
    return culprits;
};

// Time complexity
// O(n)

// Space complexity
// O(n) using of hashmap