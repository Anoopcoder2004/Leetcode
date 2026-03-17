/**
 * Approach:
 * We use a monotonic decreasing stack to solve this problem efficiently.
 * The stack stores indices of days, not temperatures themselves.
 * The temperatures corresponding to indices in the stack are in decreasing order.
 * We iterate through the temperature array from left to right.
 * For each day, we compare the current temperature with the temperature at the index
 * on top of the stack.
 * If the current temperature is higher, it means we have found the next warmer day
 * for the day represented by the top index of the stack.
 * We pop that index from the stack and calculate the difference between the current
 * index and the popped index, which gives the number of days waited.
 * This process continues until the stack is empty or the current temperature is
 * not higher than the temperature at the top index of the stack.
 * After processing, we push the current index onto the stack.
 * If a day never finds a warmer temperature in the future, its result remains 0.
 * This approach ensures each index is pushed and popped at most once,
 * giving an overall time complexity of O(n).
 *
 */
var dailyTemperatures = function(temperatures) {
    let stack = [];
    let result = new Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
        while (
            stack.length > 0 &&
            temperatures[i] > temperatures[stack[stack.length - 1]]
        ) {
            let prevIndex = stack.pop();
            result[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }

    return result;
};
