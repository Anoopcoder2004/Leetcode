// 49. Group Anagram


// Approach
// Understand the problem
// Group words that are anagrams.
// Anagrams: same letters with same frequency, just rearranged.
// Think of a signature / key
// Each word can be uniquely identified by sorted characters.
// Example: "eat" → "aet", "tea" → "aet", "tan" → "ant"
// Use a HashMap
// Key: sorted string (signature)
// Value: list of words matching the signature
// This way, all anagrams go into the same list.
// Iterate over all words
// Sort the word
// Check if key exists in HashMap
// If yes → append word to list
// If no → create new list and add word
// Return result
// Return map.values() as a list of lists.
class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        HashMap<String, List<String>> map = new HashMap<>();
        for(String s:strs)
            char [] arr = s.toCharArray();
            Arrays.sort(arr);
            String key = new String(arr);

            if(!map.containsKey(key)){
                map.put(key,new ArrayList<>());
            }
            map.get(key).add(s);
        }
        return new ArrayList<>(map.values());
    }
}