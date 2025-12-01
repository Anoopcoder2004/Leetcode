/**
 * 1. Two Sum
 * 
 * Approach: HashMap (One-pass)
 *
 * We iterate through the array once and use a HashMap to store:
 *    key   -> number in the array
 *    value -> index of that number
 *
 * For each number nums[i], we compute its complement:
 *        complement = target - nums[i]
 *
 * If the complement already exists in the map, it means we have previously
 * seen a number that can pair with nums[i] to form the target sum.
 * In that case, we immediately return both indices.
 *
 * Otherwise, we store the current number and its index in the map and continue.
 *
 * Time Complexity:  O(n)   – each element is processed once
 * Space Complexity: O(n)   – HashMap stores at most n elements
 *
 * This is the optimal solution for the Two Sum problem.
 */

class Solution {
    public int[] twoSum(int[] MyArray, int target) {
      HashMap<Integer,Integer> map = new HashMap<>();
      for(int i = 0;i<MyArray.length;i++){
        int complement = target - MyArray[i];
        if(map.containsKey(complement)){
            return new int[] {map.get(complement),i};
        }
        map.put(MyArray[i],i);
      }
      return new int[] {};
    }
}