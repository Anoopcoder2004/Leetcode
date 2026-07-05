// Approach
// We'll use a maximum tracking approach with sum calculation:

// Initialize maximum tracker: Start with 0 as the baseline wealth
// Customer iteration: Process each customer's account array
// Wealth calculation: Sum all accounts for the current customer
// Maximum comparison: Compare current customer's wealth with the tracked maximum
// Update tracking: Keep the higher value between current maximum and new wealth
// Return result: Final maximum represents the richest customer's wealth


function maximumWealth(accounts: number[][]): number {
    let max: number = 0;
    for(let customer of accounts){
        let curr: number = 0;
        for(let wealth of customer){
            curr += wealth;
        }
        max = Math.max(max, curr);
    }
    return max;  
};
//  Time complexity
//  O(n * m)

//  Space complexity
//  O(1)