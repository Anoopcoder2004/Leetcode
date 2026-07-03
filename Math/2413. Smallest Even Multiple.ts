    // Approach:
    // 1. Check if n is already even using the modulo operator.
    // 2. If n is even, it is already its own smallest even multiple.
    // 3. Otherwise, multiply n by 2 to make it even.
    // 4. Return the result.



function smallestEvenMultiple(n: number): number {

    return n % 2 === 0 ? n : 2 * n;
}

// Time complexity
// O(1)

// Space Complexity
// O(1)