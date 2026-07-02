// Approach

// loop through the string and calculate the degree using ascii values and multiply with position of the string and find the cumulative sum.


/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let ascii = 0;
    let sum = 0;
    for(let i = 0; i < s.length; i++){
       ascii = 'z'.charCodeAt(0) - s[i].charCodeAt(0) + 1;
       sum += ascii * (i + 1);
    }
    return sum;
};

// Time complexity
// O(n)

// Space complexity
// O(1)