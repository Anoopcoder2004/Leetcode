import java.util.Scanner;
public class palindrome{
public static void main(String args[]){
    Solution s1 = new Solution();
    int num;
    System.out.println("Enter a number");
    Scanner sc = new Scanner(System.in);
    num = sc.nextInt();
    boolean result =s1.isPalindrome(num);
    System.out.println("is it palindrome?"+ result);

}
}
class Solution {
    public boolean isPalindrome(int x) {
       if (x < 0){
            return false;
       }

        int reverse=0, xcopy=x;

        while(x>0){
            reverse = (reverse * 10) + (x % 10);
            x /= 10;
        }        
        return reverse == xcopy;
    }
}
