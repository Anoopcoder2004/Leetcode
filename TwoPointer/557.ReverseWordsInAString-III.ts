// Approach:
// 1. Split the input string into an array of words.
// 2. Traverse each word one by one.
// 3. Convert the current word into a character array.
// 4. Use two pointers (left and right) to reverse the characters in place.
// 5. Join the reversed characters back into a string and replace the original word.
// 6. Join all the words with spaces to form the final string.

function reverseWords(s: string): string {
    const str: string[] = s.split(" ");

    let res: string = '';

    for (let i: number = 0; i < str.length; i++) {
        let wordArray: string[] = [];
        wordArray = str[i].split("");
        let left: number = 0;
        let right: number = wordArray.length - 1;
        let temp: string = '';
        while (left < right) {
            temp = wordArray[left];
            wordArray[left] = wordArray[right];
            wordArray[right] = temp;
            left++;
            right--;
        }
        str[i] = wordArray.join("");

    }
    return str.join(" ");
};

// Time Complexity
//  O(n)

// Space Complexity
//  O(n)