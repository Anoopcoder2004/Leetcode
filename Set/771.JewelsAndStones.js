// Approach

// put all jewels in a set (since jewels are unique)
// iterate through stones and check if each stone is a jewel( present in jewel)
// if yes increment jewelCount
//return


/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let jewelSet = new Set(jewels);
    let jewelCount = 0;
    for(stone of stones){
        if(jewelSet.has(stone)){
            jewelCount++;
        }
    }
    return jewelCount;
    
};

// Time complexity
// Creating the Set: O(j) where j = jewels.length
// Iterating through stones: O(s) where s = stones.length
// Total: O(j + s)

// Space complexity
// Set stores all jewel characters: O(j)