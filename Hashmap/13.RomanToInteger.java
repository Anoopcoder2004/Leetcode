/*
13.Roman to integer
Approach:
---------
1. Create a HashMap to store the integer value of each Roman numeral.
   (I=1, V=5, X=10, L=50, C=100, D=500, M=1000)

2. Traverse the string from left to right.
   For each character:
   - Get its value (curr).
   - Look ahead to the next value (next) if it exists.

3. If the current value is smaller than the next value,
   it means this is a subtractive pair.
   Example: IV → 1 < 5, so we subtract 1 instead of adding.
   So: total -= curr

4. Otherwise, simply add the current value.
   Example: VI → 5 >= 1, so total += curr

5. Return the total after the loop ends.

Why this works:
- Roman numerals only use subtraction when a smaller value comes before a larger one.
- By checking curr < next, we detect subtractive cases efficiently.
- Time complexity is O(n) since we scan the string once.
*/


class Solution {
    public int romanToInt(String s) {
        HashMap<Character,Integer> map = new HashMap<>();
        map.put('I', 1);
        map.put('V', 5);
        map.put('X', 10);
        map.put('L', 50);
        map.put('C', 100);
        map.put('D', 500);
        map.put('M', 1000);
        int total = 0;
        for (int i = 0; i < s.length(); i++) {
            int curr = map.get(s.charAt(i));
            if (i < s.length() - 1) {
                int next = map.get(s.charAt(i+1));
                if (curr < next) {
                    total -= curr;
                    continue;
                }
            }total += curr;

        } return total;
    }
}
