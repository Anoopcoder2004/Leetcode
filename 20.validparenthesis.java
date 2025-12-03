/*
20. Valid Parentheses
Approach:
---------
1. Use a Stack to track opening brackets.
2. Traverse the string:
   - If character is an opening bracket '(', '{', '[', push it to the stack.
   - If it's a closing bracket ')', '}', ']', then:
        a) If stack is empty → invalid.
        b) Pop the top element and check if it matches the corresponding opening bracket.
3. Use a HashMap to map each closing bracket to its expected opening bracket.
4. After the loop, if the stack is empty → all brackets were matched correctly → valid.
5. If stack still has items → some brackets were not closed → invalid.
*/
class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();

        Map<Character, Character> map = new HashMap<>();
        map.put(')', '(');
        map.put('}', '{');
        map.put(']', '[');

        for(char c : s.toCharArray()) {
            // If opening bracket → push
            if (c == '(' || c == '{' || c == '[') {
                stack.push(c);
            } 
            // If closing bracket
            else {
                if (stack.isEmpty()) return false;

                char top = stack.pop();
                if (top != map.get(c)) return false;
            }
        }

        return stack.isEmpty();
    }
}
