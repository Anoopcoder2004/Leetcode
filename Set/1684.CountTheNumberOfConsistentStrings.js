// Approach

// store allowed characters in a set.
// for each letter of word in words, if every letter is inside set then only increment count and return the result.

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count = 0;
    let hashSet = new Set();
    for(letter of allowed){
        hashSet.add(letter);
    }
    for(word of words){
        let valid = true;
        for(letter of word){
            if (!hashSet.has(letter)){
                valid = false;
                break;
            }
        }
        if(valid){
            count++;
        }
    }return count;
    
};

// Time Complexity
//  O (n*k)

//  Space Complexity

//  O (1)

