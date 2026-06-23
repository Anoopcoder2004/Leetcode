// Approach

// Iterate through each Number.
// change the sign from + and - alternatively to add and subtract the sum(sum+=num, sum-=num)
// return sum

/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSum = function(nums) {
    let sum = 0;
    let sign = 1;
    for(num of nums){
        sum += (sign * num);
        sign *= -1;
    }
    return sum;
};

// Time complexity
O(n)

//Space complexity
O(1)