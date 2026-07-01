// need to improve approach to reduce time complexity from n to 1

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let divisible = 0;
    let nonDivisible = 0;
    for(let i = 1; i <= n; i++){
        if(i % m === 0){
            divisible += i;
        }else{
            nonDivisible += i;
        }
        
    }return nonDivisible - divisible;
    
};

// time complexity
//  O (n)

//  space complexity
// O (1)