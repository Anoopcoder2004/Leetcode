// approach 
// * loop through each word and loop through each letter to check for a match
// * if found match, return the index and save to op array


// /**
//  * @param {string[]} words
//  * @param {character} x
//  * @return {number[]}
//  */
var findWordsContaining = function(words, x) {
    let op =[];
    for(let i = 0; i < words.length; i++){
        for(ch of words[i]){
            if(ch == x){
                op.push(i);
                break;
            }
        }
    }
    return op;
    
};