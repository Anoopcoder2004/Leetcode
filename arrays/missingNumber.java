//268. Missing Number problem in leetcode
//
//If numbers from 0 to n are present, their expected sum is:
//n * (n + 1) / 2
//But the array is missing one number, so the actual sum of the array will be smaller.
//The difference gives the missing number:
//missing = expectedSum - actualSum
//This works because only one value is missing, and all other numbers appear exactly once.


class missingNumber {
    public int missingNumber(int[] nums) {
        int n = nums.length;
        int expectedSum = n * (1 + n) / 2;
        int actualSum = 0;
        for(int num : nums){
            actualSum += num;
        }
        return expectedSum - actualSum;
    }
}
