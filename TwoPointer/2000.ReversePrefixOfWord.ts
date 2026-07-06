// Approach
// Convert the string into a character array since strings are immutable.
// Traverse the string to find the first occurrence of 'ch'.
// Once found, initialize two pointers:
// - left at the beginning (0)
// - right at the index where 'ch' is found.
// Reverse the prefix by swapping characters while left < right.
// Convert the character array back into a string and return it.
// If 'ch' is never found, return the original string.

function reversePrefix(word: string, ch: string): string {
    let target:number = 0;
    let temp:string;
    const chars = word.split("")
    for(let i:number = 0; i<word.length; i++){
        if(word[i]=== ch){
            let right:number = i+1;
            for(let left:number = 0, right:number = i; left<=right;left++,right--){
                temp = chars[left];
                chars[left] = chars[right];
                chars[right] = temp;
            }
            for(let i :number = right; i < word.length; i++){
                chars[i] = word[i];
            }return chars.join("");
            
        }
    }return word;
};


// Time Complexity
// O(n) 

// Finding the first occurrence of ch takes O(n) in the worst case.
// Reversing the prefix takes O(k) where k is the index of ch + 1.
// Since k ≤ n, the total is:
// O(n + k) = O(n)

// Space Complexity
// O(n) 