// Approach
// use two loops to check if i and j < target , then increment count and return the result

function countPairs(nums: number[], target: number): number {
    let res : number = 0;
    for(let i : number = 0 ;i < nums.length - 1; i++){
        for(let j: number = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] < target){
                res++;
            }
        }
    }return res;  
};

// Time complexity
// O(n^2)

// Space complexity
// O(1)