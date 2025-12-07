/*
Approach:
1. If two strings have different lengths, they cannot be anagrams.
2. Use a HashMap<Character, Integer> to store the frequency of each character in string s.
3. Loop through s and increment the frequency for each character.
4. Loop through t and decrement the frequency for each character.
5. If a character in t doesn't exist in the map OR its frequency becomes negative,
   it means t has more occurrences of that character, so it's not an anagram.
6. If all frequencies balance out, the strings are valid anagrams.
*/


class Solution {
    public boolean isAnagram(String s, String t) {
        if(s.length() != t.length()){
            return false;
        }
        //adding to hashmap
        HashMap<Character, Integer> map = new HashMap<>();
        for(char c:s.toCharArray()){
            map.put(c,map.getOrDefault(c,0)+1);
        }
        //subtracting frequency
        for(char c:t.toCharArray()){
            if(!map.containsKey(c)){
                return false;
            }
            map.put(c,map.get(c)-1);
            if(map.get(c)<0){
                return false;
            }
        }
        return true;
    }
}