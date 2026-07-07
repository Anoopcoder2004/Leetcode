// Approach
// sort the array 
// check the min first(min) and last element(max) and store the average. 
// compare it with the next average using two pointer(left++ and right--).
// save the min and return.

function minimumAverage(nums: number[]): number {
    nums.sort((a,b) => a-b);
    const len:number = nums.length;
    let left:number = 0;
    let right:number = nums.length - 1;
    let min :number = Infinity;
    while(left<right){
       min = Math.min((nums[left] + nums[right])/2,min)
       left++;
       right--;
    }
    return min;
};

// Time complexity
// O(n log n)

// Space complexity
// O(1)