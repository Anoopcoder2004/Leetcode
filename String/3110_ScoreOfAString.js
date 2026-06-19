//3110. score of a string leetcode
// difficulty : easy

// approach 
 
// set variable score = 0
// for each Element, find the absolulte of ascii of that character and its adjacent character

/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let score = 0;
    for(let i = 0; i < s.length -1 ; i++){
        score += Math.abs(s[i].charCodeAt(0) - s[i+1].charCodeAt(0));
    }
    return score;
    
};