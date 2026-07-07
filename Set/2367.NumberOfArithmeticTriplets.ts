// Approach
// add every element to a set
// for each num in set, check if num+ diff and num + (2 * diff) exists
// then increment count, and return after iteration

function arithmeticTriplets(nums: number[], diff: number): number {
    let count:number = 0;
    const set = new Set(nums);
    for(const num of nums){
        if(set.has(num + diff) && set.has(num + 2 * diff)){
            count++
        }
    }return count;
};

// Time complexity
// O(n)

// Space complexity
// O(n);