/**
 * Approach:
 * 1. Use two pointers: one starting from the beginning (left)
 *    and one from the end (right) of the string.
 * 2. Move the left pointer forward until it points to an
 *    alphanumeric character.
 * 3. Move the right pointer backward until it points to an
 *    alphanumeric character.
 * 4. Convert both characters to lowercase to ensure
 *    case-insensitive comparison.
 * 5. Compare the characters at left and right pointers.
 * 6. If they are not equal, the string is not a palindrome
 *    and return false immediately.
 * 7. If they are equal, move both pointers inward
 *    (left++, right--) to continue checking.
 * 8. Repeat the process until the pointers meet or cross.
 * 9. If all valid characters match, return true.
 */
var isPalindrome = function(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        while (left < right && !/[a-z0-9]/i.test(s[left])) left++;
        while (left < right && !/[a-z0-9]/i.test(s[right])) right--;

        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

        left++;
        right--;
    }
    return true;
};
