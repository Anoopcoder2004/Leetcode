// approach
// find the greatest number first, use math.max or loop instead of sort, cuz sort takes n log n time.
// for each candy, compare with max number, if greater or equal,push true to res array. else false

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let max: number = Math.max(...candies);
    const res: boolean[] = [];
    for(let candy of candies){
        if(candy + extraCandies >= max){
            res.push(true);
        }else{
            res.push(false);
        }
    }return res;  
};


// Time complexity
// O(n)

// Space complexity
// O(n)