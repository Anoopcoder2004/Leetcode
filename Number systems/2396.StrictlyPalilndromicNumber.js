/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    
    // Definition:
    // A number n is strictly palindromic if:
    // For every base b from 2 to (n - 2),
    // the representation of n in base b is a palindrome.
    
    
    // -----------------------------
    // Brute Force Idea (not optimal):
    // -----------------------------
    // for (let b = 2; b <= n - 2; b++) {
    //   1. Convert n into base b
    //   2. Check if that representation is a palindrome
    //   3. If NOT palindrome → return false
    // }
    // return true
    
    
    // -----------------------------
    // IMPORTANT OBSERVATION:
    // -----------------------------
    // We only need to check ONE base:
    // b = (n - 2)
    
    
    // -----------------------------
    // WHY?
    // -----------------------------
    // When converting n into base (n - 2):
    
    // Step 1:
    // n ÷ (n - 2) = 1 remainder 2
    // Because:
    // n = (n - 2) * 1 + 2
    
    
    // Step 2:
    // Now take the quotient = 1
    // 1 ÷ (n - 2) = 0 remainder 1
    
    
    // Step 3:
    // Read remainders from bottom to top:
    // → "12"
    
    
    // -----------------------------
    // CRITICAL POINT:
    // -----------------------------
    // "12" is NOT a palindrome
    // because "12" !== "21"
    
    
    // -----------------------------
    // FINAL CONCLUSION:
    // -----------------------------
    // For EVERY n >= 4:
    // There exists at least one base (b = n - 2)
    // where n is NOT palindromic
    
    
    // So the condition ALWAYS fails
    
    
    return false;
};