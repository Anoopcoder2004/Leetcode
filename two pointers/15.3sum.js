// 1. Sort the array to enable two-pointer technique and easy duplicate handling
// 2. Iterate through the array and fix one number at index i
// 3. Skip duplicate values for the fixed index to avoid repeated triplets
// 4. For each fixed number, use two pointers (left and right) to find remaining two numbers
// 5. Calculate the sum of nums[i], nums[left], and nums[right]
// 6. If the sum is zero, store the triplet in the result
// 7. Skip duplicate values for left and right pointers to ensure uniqueness
// 8. Move both pointers inward after finding a valid triplet
// 9. If the sum is less than zero, move left pointer to increase the sum
// 10. If the sum is greater than zero, move right pointer to decrease the sum


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = [];
    nums.sort((a,b) => a-b);
    
    for(let i = 0;i < nums.length -2; i++){
        if(i > 0 && nums[i] ===  nums[i - 1]){
            continue;
        }
        let left = i + 1;
        let right = nums.length -1;
        
        while(left < right){
            const sum = nums[i] + nums[left] + nums[right];
            
            if(sum === 0){
                result.push([nums[i],nums[left], nums[right]]);

                while(left < right && nums[left] === nums[left + 1]){
                    left++;
                }
                while(left < right && nums[right] === nums[right - 1]){
                    right--;
                }
                left++;
                right--;
            }else if(sum < 0){
                left++;
            }else{
                right--;
            }
        }
    }return result;
};