function isBalanced(str) {
    // Create empty stack
    const stack = [];

    // Traverse each character in string
    for (const char of str) {
        // push opening parantheses onto the stack
        if (char == '(') {
            stack.push(char)
        }
        else if(char == ')') {
            // if stack is empty 
            if (stack.length == 0) {
                return false;
            }

            stack.pop();
        }

    }

    return stack.length === 0;
}

// console.log(isBalanced("(())"));
// console.log(isBalanced("(()"));
console.log(isBalanced(")("));
