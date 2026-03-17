/*
1. Create an empty stack to store numbers.

2. Traverse the tokens array one by one from left to right.

3. If the current token is a number:
   → convert it to Number
   → push it onto the stack.

4. If the current token is an operator (+, -, *, /):
   → pop the top element from the stack (this is operand b)
   → pop the next top element from the stack (this is operand a).

5. Apply the operator using the order: a operator b
   (order matters for - and /).

6. For division, truncate the result toward zero
   (use Math.trunc in JavaScript).

7. Push the computed result back onto the stack.

8. After processing all tokens, the stack will have only one element.
   → return that element as the final result.
*/
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    for(let token of tokens){
        if(!isNaN(token)){
            stack.push(Number(token));
        }else{
            let b = stack.pop();
            let a = stack.pop();
            if(token === '+') stack.push(a+b);
            if(token === '-') stack.push(a-b);
            if(token === '*') stack.push(a*b);
            if(token === '/') stack.push(Math.trunc(a/b));

        }
    }return stack[0];
};