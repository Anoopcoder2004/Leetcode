// approach

// create a Map.
// iterate through all numbers
// if map does not have the number, add num as key and 1 as value (count); 
// if map has the key(means it is already seen once), then increment the value of the key by 1.
// iterate through the map and find the number of values which is 2. and return the count.

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