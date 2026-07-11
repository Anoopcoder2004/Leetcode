// Approach
// For each character in string, check the given condition , similar to two pointer.

function firstMatchingIndex(s: string): number {
    for(let i:number = 0; i < s.length; i++){
        if(s[i] === s[s.length - i - 1]){
            return i;
        }
    }return -1;
};
// Time complexity
// O(n)

// Space complexity
// O(1)