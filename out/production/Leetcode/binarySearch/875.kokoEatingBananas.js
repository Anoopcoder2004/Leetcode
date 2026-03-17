/**
 * Approach:
 * 1. Define the search range:
 *    - Minimum possible speed = 1
 *    - Maximum possible speed = largest pile
 * 2. Create a helper function `hoursNeeded(speed)`:
 *    - For each pile, calculate hours = ceil(pile / speed)
 *    - Sum these hours to get total time at this speed
 * 3. Use binary search to find the minimum speed:
 *    - While low < high:
 *        a. mid = floor((low + high) / 2)
 *        b. If hoursNeeded(mid) <= h, then mid speed is enough, try slower speeds (high = mid)
 *        c. Else, mid speed is too slow, try faster speeds (low = mid + 1)
 * 4. When loop ends, low == high, which is the minimum speed to finish on time
 */

var minEatingSpeed = function(piles, h) {
    let low = 1;
    let high = Math.max(...piles);

    const hoursNeeded = (speed) => {
        let total = 0;
        for (let pile of piles) {
            total += Math.ceil(pile / speed);
        }
        return total;
    }

    while (low < high) {
        let mid = Math.floor((low + high) / 2);

        if (hoursNeeded(mid) <= h) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }

    return low;
};
