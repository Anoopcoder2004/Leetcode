// 1. Problem: Find the minimum eating speed `k` so that Koko can eat all banana piles within `h` hours.

// 2. Idea: Check each possible speed starting from 1, calculate total hours needed at that speed, and find the smallest speed that works.

// 3. Steps:
//    a. Initialize speed = 1.
//    b. Loop indefinitely:
//        i.   Calculate totalTime needed to eat all piles at the current speed.
//        ii.  For each pile, hours to eat = ceil(pile / speed).
//        iii. Sum all hours for all piles → totalTime.
//        iv.  If totalTime <= h, current speed is enough → return speed.
//        v.   Else, increase speed by 1 and try again.
       
// 4. Note:
//    - Using Math.ceil ensures we account for partially eaten piles as a full hour.
//    - This is the brute force approach.
//    - For large inputs, binary search on speed is much faster.


class Solution {
    minEatingSpeed(piles, h) {
        let speed = 1;
        while(true){
            let totalTime = 0;
            for(let pile of piles){
                totalTime += Math.ceil(pile / speed);
            }
            if(totalTime <= h){
                return speed;
            }
            speed++;
        }
    }
}
