// Approach
// create a hashmap set key: char, value:1
// for each element in input String, check if it exists in map,then increment the value by 1
// else add element to the map

// after adding

// for each element of map, if its a vowel, compare with maxVowel and store max . do same for consonant
//  return sum of maxConsonant and maxVowel

/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let maxVowel = 0;
    let maxConsonant = 0;
    let map = new Map();
    for (let ch of s) {
        if (map.has(ch)) {
            map.set(ch, map.get(ch) + 1);
        }else{
            map.set(ch,1);
        }
    }
    for (const [char, count] of map) {
        if ('aeiou'.includes(char)) {
            maxVowel = Math.max(maxVowel, count);
        } else {
            maxConsonant = Math.max(maxConsonant, count);
        }
    } return maxVowel + maxConsonant;

};

// Time complexity
// o(n)

// Space complexity
// O(1)