class Solution {

    /*
     * LEETCODE QUESTION: Encode and Decode Strings (#271)
     *
     * PROBLEM:
     * Design an algorithm to encode a list of strings into a single string,
     * and then decode that single string back into the list of strings.
     *
     * Constraints:
     * - Strings may contain any characters (including '#'), so we cannot simply split.
     *
     * APPROACH USED:
     * We encode each string as:
     *       <length>#<string>
     * Example:  ["lint","code","love","you"]
     * Encoded:  "4#lint4#code4#love3#you"
     *
     * Why this works:
     * - Using the length ensures we know exactly how many characters to read.
     * - '#' is a delimiter between length and the string.
     */

    // ENCODE:
    // Convert list → single string
    public String encode(List<String> strs) {

        // APPROACH (ENCODE):
        // 1. For each string, append: <length>#<string>
        // 2. Length ensures correctness even if s contains '#'
        StringBuilder sb = new StringBuilder();
        for (String s : strs) {
            sb.append(s.length()).append("#").append(s);
        }
        return sb.toString();
    }

    // DECODE:
    // Convert encoded string → original list
    public List<String> decode(String str) {

        // APPROACH (DECODE):
        // 1. Read characters until '#': this gives the string length
        // 2. Convert that number to integer
        // 3. Read exactly <length> characters to extract original string
        // 4. Move pointer forward and repeat
        List<String> res = new ArrayList<>();
        int i = 0;

        while (i < str.length()) {

            // Step 1: find '#'
            int j = i;
            while (str.charAt(j) != '#') {
                j++;
            }

            // Step 2: parse the length
            int length = Integer.parseInt(str.substring(i, j));

            // Step 3: skip '#'
            j++;

            // Step 4: extract string of 'length' characters
            res.add(str.substring(j, j + length));

            // Step 5: move pointer to next encoded part
