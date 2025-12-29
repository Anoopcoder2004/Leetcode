// 1️⃣ Use TWO stacks:
//    - stack → stores all pushed values
//    - minStack → stores the minimum value at each level

// 2️⃣ When pushing a value, always push it into the main stack

// 3️⃣ If minStack is empty, push the value directly
//    because it is the minimum by default

// 4️⃣ If minStack is NOT empty, compare:
//    - current value
//    - last minimum stored in minStack

// 5️⃣ Push the smaller of these two values into minStack
//    so minStack always keeps track of the minimum till that point

// 6️⃣ When popping, pop from BOTH stack and minStack
//    to keep both stacks perfectly aligned

// 7️⃣ To get the top element, return the last element of stack

// 8️⃣ To get the minimum element, return the last element of minStack

// 9️⃣ This design allows push, pop, top, and getMin
//    to all run in O(1) time complexity




var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if(this.minStack.length === 0){
        this.minStack.push(val);
    }else{
        this.minStack.push(
            Math.min(val, this.minStack[this.minStack.length - 1 ])
        );
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */