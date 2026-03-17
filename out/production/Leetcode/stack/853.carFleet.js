// For each car, calculate the time it takes to reach the target:
// time = (target - position) / speed

// Pair each car’s position with its calculated time.

// Sort all cars by their starting position in descending order
// (cars closest to the target are processed first).

// Traverse the sorted cars:

// Keep track of the maximum time (maxTime) seen so far.

// If the current car’s time is greater than maxTime,
// it cannot catch up with the car in front, so it forms a new fleet.

// Otherwise, it joins the existing fleet ahead.

// Count how many times a new fleet is formed.

// Return the total number of fleets.


/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const cars = position.map((pos,i) =>[pos,speed[i]]);
    cars.sort((a,b)=>b[0] - a[0]);
    let fleets = 0;
    let maxTime = 0;
    for(let [pos,spd] of cars){
        const time = (target - pos) / spd;
        if(time > maxTime){
            fleets++;
            maxTime = time;
        }
    }
    return fleets;
};