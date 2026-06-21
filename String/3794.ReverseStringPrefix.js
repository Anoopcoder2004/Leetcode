/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {

    // -----------------------------
    // APPROACH:
    // -----------------------------
    // We need to reverse the first k characters of the string
    // and keep the remaining part as it is.
    
    // Step 1:
    // Traverse from index (k - 1) to 0
    // → This reverses the first k characters
    
    // Step 2:
    // Traverse from index k to end of string
    // → Append remaining characters as it is
    
    // Step 3:
    // Combine both parts into a new string and return it
    
    
    let rev = "";

    // Reverse first k characters
    for (let i = k - 1; i >= 0; i--) {
        rev += s[i];
    }

    // Append remaining characters
    for (let i = k; i < s.length; i++) {
        rev += s[i];
    }

    return rev;


    // -----------------------------
    // TIME COMPLEXITY:
    // -----------------------------
    // First loop runs k times
    // Second loop runs (n - k) times
    // Total = k + (n - k) = n
    
    // 👉 Time Complexity = O(n)


    // -----------------------------
    // SPACE COMPLEXITY:
    // -----------------------------
    // We are creating a new string "rev"
    // which stores all n characters
    
    // 👉 Space Complexity = O(n)
};