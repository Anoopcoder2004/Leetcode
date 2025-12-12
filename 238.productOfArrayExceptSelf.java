// Step 1: Calculate prefix products
// result[i] will store product of all elements before index i

// Step 2: Calculate suffix products and multiply with prefix
// suffix keeps track of product of elements after index i
// multiply prefix product with suffix
// update suffix for next iteration

// Step 3: The result array now contains the product of all elements except self at each index

// Step 4: Return the result array



class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int [] output = new int[n];
        output[0] = 1;
        for(int i = 1; i < n; i++){
            output[i] = output[i-1] * nums[i-1];
        }
        int suffix = 1;
        for(int i = n -1;i >= 0;i--){
            output[i] = output[i]* suffix;
            suffix *= nums[i];
        }return output;
    }
}