// Step 1: Calculate prefix products
// result[i] will store product of all elements before index i

// Step 2: Calculate suffix products and multiply with prefix
// suffix keeps track of product of elements after index i
// multiply prefix product with suffix
// update suffix for next iteration

// Step 3: The result array now contains the product of all elements except self at each index

// Step 4: Return the result array



/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = (nums.length);
    let output = new Array(n);
    output[0] = 1;
    for(let i = 1;i < n;i++){
        output[i] = output[i-1] * nums[i-1];
    }
    suffix=1;
    for(let i = n - 1;i >= 0;i--){
        output[i] *= suffix;
        suffix *= nums[i];
    }return output;
}