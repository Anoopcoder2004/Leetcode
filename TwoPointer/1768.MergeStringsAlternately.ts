// Approach:
// 1. Find the lengths of both input strings.
// 2. Iterate up to the length of the longer string.
// 3. During each iteration:
//    - Append the current character from the first string if the index is valid.
//    - Append the current character from the second string if the index is valid.
// 4. Continue until all characters from both strings are processed.
// 5. Return the merged string.

function mergeAlternately(word1: string, word2: string): string {
    let res: string="";
    let first: number = word1.length;
    let second: number = word2.length;
    for(let i :number = 0; i < first || i < second; i++){
        if(i <first){
            res+=word1[i];
        }if(i < second){
            res+=word2[i];
        }
    }return res;
};

// Time complexity;
// O(n1 + n2)

// Space complexity;
// O(n1 + n2)