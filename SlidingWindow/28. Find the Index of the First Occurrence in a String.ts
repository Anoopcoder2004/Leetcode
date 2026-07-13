// Approach:
// 1. Iterate through each possible starting index in the haystack.
//    (Only go up to haystack.length - needle.length)
// 2. For each starting index, compare the characters of the needle
//    with the corresponding characters in the haystack.
// 3. If all characters match, return the current starting index.
// 4. If a mismatch occurs, move to the next starting index.
// 5. If no match is found after checking all possible positions,
//    return -1.

function strStr(haystack: string, needle: string): number {
    const n = haystack.length;
    const m = needle.length;

    for (let i = 0; i <= n - m; i++) {
        let j = 0;

        while (j < m && haystack[i + j] === needle[j]) {
            j++;
        }

        if (j === m) {
            return i;
        }
    }

    return -1;
}

// Time complexity
// O(n × m)

// Space complexity
// O(1)