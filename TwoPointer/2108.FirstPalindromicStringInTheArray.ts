// Approach
// 1.Iterate through each each word.
// 2.when a word is a palindrome, return.
// 3.if no palindrome exists,return empty string.

function firstPalindrome(words: string[]): string {
    for (let word of words) {
        let left: number = 0;
        let right: number = word.length - 1;
        while (left < right) {
            if (word[left] !== word[right]) {
                break;
            }
            left++;
            right--;   
        }
        if(left>=right){
            return word;
            }
    } return "";
};

// Time complexity
// O(m*k)

// Space complexity
// O(1)