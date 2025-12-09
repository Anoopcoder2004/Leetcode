// Step 1: Count the frequency of each number using a HashMap

// Step 2: Convert the map entries (number, frequency) into a list

// Step 3: Sort the list by frequency in descending order

// Step 4: Pick the top k elements from the sorted list

// Step 5: Return the final array of k most frequent elements
class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i <nums.length; i++) {
            if (!map.containsKey(nums[i])) {
                map.put(nums[i], 1);
            } else {
                map.put(nums[i],map.get(nums[i]) + 1);
            }
        }
        List<Map.Entry<Integer, Integer>> list = new ArrayList<>(map.entrySet());
        list.sort((a, b) -> b.getValue() - a.getValue());
        int[] result = new int[k];
        for (int i = 0; i < k; i++) {
            result[i] = list.get(i).getKey();
        }
        return result;
    }
}