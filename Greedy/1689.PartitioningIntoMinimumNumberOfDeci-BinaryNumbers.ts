// Approach

// Observe that a single deci-binary number can contribute at most 1 to any digit position.
// Therefore, if a digit has value k, we need at least k deci-binary numbers to form that digit.
// Since the largest digit requires the maximum number of deci-binary numbers, it alone determines the minimum answer.
// Traverse the string once and greedily keep track of the maximum digit encountered.
// Return the maximum digit as the answer.

function minPartitions(n: string): number {

    let max : number = 0;

    for(const digit of n){
        max = Math.max(max,Number(digit));
    }
    return max;
};

// Time complexity
// O (n)

// Space complexity
// O (1)