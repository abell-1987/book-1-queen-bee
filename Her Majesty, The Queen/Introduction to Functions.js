//What is a function?
//A JavaScript function is a reusable block of code designed to perform a specific task. Instead of writing the same code multiple times, you define it once and run it whenever you need it by "calling" or "invoking" the function.In JavaScript, functions are also considered First-Class Citizens, meaning they can be stored in variables, passed as arguments to other functions, and returned from other functions.

//Core Anatomy of a Function
//A standard function definition consists of four main parts:
//1. The function keyword: Tells JavaScript you are creating a function.
//2. The Name: A unique identifier to call the function later (e.g., calculateTotal).
//3. Parameters: Input placeholders enclosed in parentheses () that receive data.
//4. The Body: The actual code block enclosed in curly braces {} that executes the task.

//Example:
// Defining the function
function greetUser(name) {
    return "Hello, " + name + "!";
}

// Calling (invoking) the function
let message = greetUser("Alice");
console.log(message); // Outputs: Hello, Alice!

//Key Concepts to Know
//- Parameters are the aliases listed in the function definition (like name). Arguments are the real values you pass into the function when you call it (like "Alice").
//- The return Statement: This stops the execution of the function and sends a value back to the code that called it. If no return is specified, the function automatically returns undefined.
//- Hoisting: Standard function declarations are "hoisted" to the top of your code script by the browser. This means you can actually call a function before the line where you wrote it.

//3 Common Ways to Write Functions
//As explained in detail on the MDN Web Docs Functions Guide, JavaScript offers a few different syntaxes to build functions depending on your use case:

//1. Function Declaration
//The traditional approach using named blocks.

function add(a, b) {
    return a + b;
}

//2. Function Expression
//Defining a function inside a variable. These are not hoisted, so they must be defined before they are used.

const multiply = function (a, b) {
    return a * b;
};


//3. Arrow Functions
//Introduced in modern JavaScript (ES6), this provides a shorter, sleeker syntax that is highly popular for quick operations.

const subtract = (a, b) => a - b;

//Why Use Functions?
//- Code Reusability: Write a complex calculation once and reuse it across thousands of lines of code.
//- Maintainability: If a feature breaks or needs an update, you only have to fix the code inside that single function block.
//- Readability: Breaking a large script down into small, descriptive functions (like validateEmail() or loadProfile()) makes your codebase easy for others to read.