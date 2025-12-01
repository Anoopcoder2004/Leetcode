// 283. Move Zeroes
// Approach: Two-Pointer (Swap-Based)
// ----------------------------------
// We use two pointers: `right` scans the array, and `slow` marks the position
// where the next non-zero element should be placed.
//
// As `right` moves through the array:
//
// 1. If nums[right] is non-zero, we swap it with nums[slow].
// 2. Increment slow (meaning the next non-zero should go to the next position).
//
// This ensures:
// - All non-zero elements are moved to the front in their original order.
// - All zeros naturally shift to the back by swapping.
// - Runs in O(n) time and O(1) extra space.
//
// Example:
// nums = [0,1,0,3,12]
// After processing: [1,3,12,0,0]



class movingZeros {
    public void moveZeroes(int[] nums) {
        int slow = 0;
        for(int right = 0; right<nums.length;right++){
            if(nums[right]!=0){
                int temp = 0;
                temp = nums[slow];
                nums[slow] = nums[right];
                nums[right] = temp;
                slow++;
            }
        }
    }
}