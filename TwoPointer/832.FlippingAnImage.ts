//  * Approach:
//  * 1. Traverse each row of the image.
//  * 2. Use two pointers (left and right) to reverse the row in-place.
//  * 3. While swapping, invert both values using XOR (^1):
//  *      - 0 ^ 1 = 1
//  *      - 1 ^ 1 = 0
//  * 4. Continue until the pointers meet or cross.
//  * 5. Return the modified image.

function flipAndInvertImage(image: number[][]): number[][] {
    for(let arr of image){
        let left:number = 0;
        let right:number = arr.length-1;
        let temp:number = 0;
        while(left<=right){
            temp = arr[left]^1;
            arr[left] = arr[right]^1;
            arr[right] = temp;
            left++;
            right--;
        }
    }return image;
};

// Time Complexity
//  O(m × k) 
// Space Complexity
//  O(1) 