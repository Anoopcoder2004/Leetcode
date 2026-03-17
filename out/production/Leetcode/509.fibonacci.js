// 1️⃣ The function fib is called with a number n.

// 2️⃣ If n is 0, the function immediately returns 0 (base case).

// 3️⃣ If n is 1, the function immediately returns 1 (base case).

// 4️⃣ For any value greater than 1, the function calls itself with n - 1.

// 5️⃣ At the same time, it also calls itself with n - 2.

// 6️⃣ The results of both recursive calls are added and returned as the Fibonacci value of n.



/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n === 0){
        return 0;
    }
    if(n === 1){
        return 1;
    }
    return fib(n-1) + fib(n-2);
};