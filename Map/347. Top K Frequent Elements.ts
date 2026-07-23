// Approach
// add the number and occuring frequency in map
// sort the map based on frequency after converting it to array.
// return the first k numbers
function topKFrequent(nums: number[], k: number): number[] {
    let map = new Map();
    for (let num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num)+1);
        } else {
            map.set(num, 1);
        }
    }
    let array = [];
    let sortedArray = [...map];
    sortedArray.sort((a,b) => b[1] - a[1]);
    for (let i = 0; i < k; i++) {
       array.push(sortedArray[i][0]);
    } return array;
};

// Time complexity
// O(n log n)

// Space complexity
// O(n)