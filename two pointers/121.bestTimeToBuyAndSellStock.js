// 1. We want to buy once and sell once to get the maximum profit
// 2. Keep track of the minimum price seen so far (best day to buy)
// 3. Initialize maxProfit to 0 because profit cannot be negative
// 4. Traverse the prices array day by day
// 5. If today’s price is lower than the previous minimum,
//    update minPrice and automatically skip all previous buy days
// 6. Assume today is the selling day and calculate profit using minPrice
// 7. Update maxProfit if today’s profit is greater than the previous max
// 8. After the loop, maxProfit contains the best possible profit
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for(let price of prices){
        minPrice = Math.min(minPrice,price);
        maxProfit = Math.max(maxProfit,price-minPrice);
    }return maxProfit;
};