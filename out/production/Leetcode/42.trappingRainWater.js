// 1. Get the length of the height array
// 2. Handle edge case: if array is empty, no water can be trapped
// 3. Create two arrays to store maximum height to the left and right of each index
// 4. Build the leftMax array where each index stores the tallest bar seen from the left
// 5. Build the rightMax array where each index stores the tallest bar seen from the right
// 6. For each index, find the minimum of leftMax and rightMax
// 7. Subtract the current height from this minimum to get trapped water at that index
// 8. Add trapped water from all indices to get the total trapped water
// 9. Return the total trapped water
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const n = height.length;
    if(n === 0) {
        return 0;
    }
    let leftMax = new Array(n);
    let rightMax = new Array(n);
    leftMax[0]=height[0];
    for(let i = 1;i < n;i++){
        leftMax[i] = Math.max(leftMax[i-1],height[i]);
    }
    rightMax[n-1] = height[n-1];
    for(let i = n - 2;i>=0;i--){
        rightMax[i]=Math.max(rightMax[i+1],height[i]);
    }
    let water = 0;
    for(let i = 0;i < n;i++){
        water += Math.min(leftMax[i],rightMax[i])-height[i];
    }
    return water;
};