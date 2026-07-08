// Approach
// Create a result array to store the rearranged numbers.
//
// Keep two pointers:
// - One for the next even index (where positive numbers go).
// - One for the next odd index (where negative numbers go).
//
// Traverse the input array once. If the current number is positive,
// place it at the current even index and move the even pointer by 2.
// If it's negative, place it at the current odd index and move the
// odd pointer by 2.
//
// Since the problem guarantees an equal number of positive and negative
// numbers and the result must start with a positive number, this
// correctly arranges the elements while preserving their original order.

function rearrangeArray(nums: number[]): number[] {
    let positiveIndex:number =0;
    let negativeIndex:number = 1;
    let res:number [] = [];
    for(let num of nums){
        if(num < 0){
            res[negativeIndex] = num;
            negativeIndex += 2;
        }else{
            res[positiveIndex] = num;
            positiveIndex += 2;
        }
    }return res;
};

// Time complexity
// O(n)

// Space complexity
// O(n)