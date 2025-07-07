public class TwoSum{
    public static void main(String[] args) {
        Solution s1=new Solution();
        int[] case1=s1.twoSum(new int[]{7,2,5,11,15}, 9);
        System.out.println(case1[0]+","+case1[1]);

        Solution s2=new Solution();
        int[] case2=s2.twoSum(new int[]{7,2,5,11,15}, 7);
        System.out.println(case2[0]+","+case2[1]);

        
        Solution s3=new Solution();
        int[] case3=s3.twoSum(new int[]{7,2,5,11,15}, 26);
        System.out.println(case3[0]+","+case3[1]);


    }
}

class Solution {
    public int[] twoSum(int[] MyArray, int target) {
        for(int i=0;i<MyArray.length;i++){
            for(int j=i+1;j<MyArray.length;j++){
                if(MyArray[i]+MyArray[j]==target){
                    return new int[]{i,j};
                }
            }
        }
        return new int[]{};
    }
}