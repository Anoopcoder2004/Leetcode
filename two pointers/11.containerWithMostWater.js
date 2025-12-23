// Initialize left pointer at the beginning of the array
// Initialize right pointer at the end of the array (maximum width)
//
// Create a variable to store the maximum area found so far
//
// Loop while the left pointer is less than the right pointer
//
// Find the height of the container as the minimum of the two heights
//
// Calculate the width as the distance between left and right pointers
//
// Calculate the current area using height × width
//
// Update the maximum area if the current area is larger
//
// Greedy step:
// Move the pointer pointing to the smaller height inward
// because width always decreases and only a taller line can increase area
//
// Repeat until the pointers meet
//
// Return the maximum area found

var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;
    while(left < right){
        max = Math.max(max,(Math.min(height[left],height[right])*(right - left)));

        //greedy pointer movement
        if(height[left] > height[right]){
            right--;
        }else{
            left++;
        }
    }return max;
};