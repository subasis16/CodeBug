export const fundamentalsData = [
  {
    id: 'basic-syntax',
    title: 'Basic Syntax & Variables',
    description: 'The fundamental building blocks of writing code, including how to store and type data.',
    items: [
      {
        name: 'Variable Declarations (JS)',
        desc: 'Different ways to declare variables and their specific use cases (scoping rules).',
        code: `// var: Function scope (Avoid in modern JS)
var oldschool = "Hello"; 

// let: Block scope, reassignable. Use for values that change.
let score = 0;
score = score + 10; 

// const: Block scope, cannot be re-assigned. Use by default.
const API_URL = "https://api.example.com";`
      },
      {
        name: 'Primitive Data Types',
        desc: 'The most basic values provided by the language.',
        code: `const str = "Text string";      // String
const num = 42;                 // Number (Integer, Float)
const isTrue = false;           // Boolean
const notAssigned = undefined;  // Undefined (value not yet set)
const emptyValue = null;        // Null (explicitly empty)
const uniqueId = Symbol('id');  // Symbol (unique identifier)`
      },
      {
        name: 'Comments',
        desc: 'Adding context or disabling code snippets for documentation or debugging.',
        code: `// Single-line comment: Great for brief explanations

/*
   Multi-line comment: Use for taking out large chunks
   of code during debugging, or writing long docs.
*/

/**
 * JSDoc / Docblock: Used for documenting functions
 * @param {string} User name
 * @returns {boolean} Status
 */`
      }
    ]
  },
  {
    id: 'conditional-statements',
    title: 'Conditional Statements',
    description: 'Control the flow of execution based on specific boolean logic.',
    items: [
      {
        name: 'If / Else If / Else',
        desc: 'Standard branching depending on whether a state is truthy or falsy.',
        code: `if (userRole === "admin") {
  showAdminPanel();
} else if (userRole === "editor") {
  showEditorPanel();
} else {
  showReaderPanel();
}`
      },
      {
        name: 'Switch Statement',
        desc: 'Best used when checking a single variable against many specific, discrete values.',
        code: `switch (httpStatus) {
  case 200:
    console.log("Success");
    break; // Don't forget 'break' or it will fall through!
  case 404:
    console.log("Not Found");
    break;
  case 500:
    console.log("Server Error");
    break;
  default:
    console.log("Unknown Status: " + httpStatus);
}`
      },
      {
        name: 'Ternary Operator',
        desc: 'A quick, one-line abbreviation for a standard if/else. Great for assignments or React rendering.',
        code: `// condition ? expressionIfTrue : expressionIfFalse
const statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";

// Equivalent to:
let statusMessage;
if (isLoggedIn) {
  statusMessage = "Welcome back!";
} else {
  statusMessage = "Please log in";
}`
      },
      {
        name: 'Logical Assignment (Short-circuiting)',
        desc: 'Assigning default values using logical operators.',
        code: `// || returns the first TRUTHY value
const port = process.env.PORT || 3000;

// ?? (Nullish Coalescing) returns first value that IS NOT null/undefined
// Better for 0 or false values
const defaultScore = userScore ?? 100;

// && returns second value only if first is truthy
const renderName = user && user.name;`
      }
    ]
  },
  {
    id: 'loops',
    title: 'Loops & Iteration',
    description: 'Repeating a block of code efficiently for a specific length or condition.',
    items: [
      {
        name: 'Traditional For Loop',
        desc: 'Used when you know exactly how many times you want to iterate.',
        code: `// for (initialization; condition; increment)
for (let i = 0; i < 5; i++) {
  console.log("Iteration number " + i);
}`
      },
      {
        name: 'While & Do-While Loops',
        desc: 'Used when iterating until a specific condition is no longer explicitly true.',
        code: `// While: Checks condition BEFORE running
let isAlive = true;
while (isAlive) {
  playGame();
  isAlive = checkHealth();
}

// Do-While: Runs AT LEAST ONCE, then checks condition
do {
  askForInput();
} while (!validInput);`
      },
      {
        name: 'For...Of Loop (Iterables)',
        desc: 'The best way to iterate over Arrays, Strings, or Maps.',
        code: `const frameworks = ['React', 'Vue', 'Svelte'];

// Iterates over the VALUES
for (const fw of frameworks) {
  console.log(fw);
}`
      },
      {
        name: 'For...In Loop (Objects)',
        desc: 'Used specifically to iterate over the properties (keys) of an object.',
        code: `const developer = { name: "Alice", level: "Senior", stack: "MERN" };

// Iterates over the KEYS
for (const key in developer) {
  console.log(key + ": " + developer[key]);
}`
      },
      {
        name: 'Array Methods (Functional)',
        desc: 'Modern, functional approaches to iterating arrays.',
        code: `const numbers = [1, 2, 3];

// .forEach - Just loops (returns undefined)
numbers.forEach(num => console.log(num));

// .map - Returns a NEW transformed array
const doubled = numbers.map(num => num * 2); // [2, 4, 6]

// .filter - Returns a NEW array containing only matching items
const evens = numbers.filter(num => num % 2 === 0);`
      }
    ]
  },
  {
    id: 'functions',
    title: 'Functions',
    description: 'Modularizing logic into reusable, testable blocks.',
    items: [
      {
        name: 'Function Declaration',
        desc: 'The classic approach. Gets "hoisted" (can be called before defined in code).',
        code: `function calculateTotal(price, taxRate) {
  return price + (price * taxRate);
}`
      },
      {
        name: 'Arrow Functions',
        desc: 'Modern, concise syntax. Does not bind its own \`this\`. Extremely common in callbacks and React.',
        code: `// Multi-line block (requires 'return')
const multiply = (a, b) => {
  const result = a * b;
  return result;
};

// Implicit return (one-liner)
const square = (x) => x * x;

// Returning an object implicitly (wrap in parens)
const createItem = (id) => ({ id: id, active: true });`
      },
      {
        name: 'Default Parameters',
        desc: 'Setting fallback values directly in the function definition.',
        code: `// tax falls back to 0.2 if not passed
function checkout(price, tax = 0.2) {
  return price + (price * tax);
}

checkout(100);       // Uses 0.2
checkout(100, 0.05); // Overrides to 0.05`
      },
      {
        name: 'Rest Parameters',
        desc: 'Collects multiple arguments into a single Array.',
        code: `function sumAll(...numbers) {
  // numbers is an array [1, 5, 10]
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

sumAll(1, 5, 10); // 16`
      }
    ]
  },
  {
    id: 'data-structures',
    title: 'Data Structures',
    description: 'Organizing and formatting data to be processed efficiently.',
    items: [
      {
        name: 'Arrays (Lists)',
        desc: 'Ordered collections of data, accessible by an index.',
        code: `const tech = ["HTML", "CSS", "JS"];
        
tech.push("React");       // Add to end
tech.unshift("Figma");    // Add to start
tech.pop();               // Remove from end
const idx = tech.indexOf("CSS"); // 1`
      },
      {
        name: 'Objects (Dictionaries/Hash Maps)',
        desc: 'Key-value pairs for modeling real-world entities or configs.',
        code: `const config = {
  theme: "dark",
  version: 1.5,
  features: ["login", "dashboard"]
};

// Accessing
console.log(config.theme);     // Dot notation
console.log(config["version"]); // Bracket notation`
      },
      {
        name: 'Destructuring',
        desc: 'Easily extracting data from objects or arrays into distinct variables.',
        code: `// Object Destructuring
const user = { username: "Admin", email: "x@x.com" };
const { username, email } = user;

// Array Destructuring
const coordinates = [10.5, 45.2];
const [lat, long] = coordinates;`
      },
      {
        name: 'Sets',
        desc: 'A collection of unique values. Great for removing duplicates.',
        code: `const tags = new Set(["react", "node", "react"]);
// Set(2) {"react", "node"}

tags.add("aws");
tags.has("node"); // true

// Convert back to Array
const uniqueTags = [...tags];`
      }
    ]
  },
  {
    id: 'operators',
    title: 'Operators & Math',
    description: 'Performing operations and manipulating specific values.',
    items: [
      {
        name: 'Comparison Operators',
        desc: 'Evaluating equality and differences.',
        code: `// Equality
5 == "5"   // TRUE (Loose equality, types coerced)
5 === "5"  // FALSE (Strict equality, types MUST match) - ALWAYS USE STRICT

// Relational
10 > 5     // Greater than
10 >= 10   // Greater or equal
5 < 1      // Less than
5 <= 6     // Less or equal`
      },
      {
        name: 'Mathematical / Arithmetic Operators',
        desc: 'Modifying numbers.',
        code: `let x = 10;
        
x + 5;  // Addition (15)
x - 2;  // Subtraction (8)
x * 2;  // Multiplication (20)
x / 2;  // Division (5)
x ** 2; // Exponentiation (100)
x % 3;  // Modulo/Remainder: 10 divided by 3 has remainder 1

x++;    // Increment (11)
x--;    // Decrement (10)`
      },
      {
        name: 'Spread Operator (...)',
        desc: 'Spreads out iterables (arrays, objects) into individual elements. Highly heavily in React state.',
        code: `// Array copying / merging
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4]

// Object merging
const defaults = { auth: true, retries: 3 };
const userConfig = { retries: 5, path: "/dev" };
const finalConfig = { ...defaults, ...userConfig };
// { auth: true, retries: 5, path: "/dev" }`
      }
    ]
  },
  {
    id: 'input-output',
    title: 'Input / Output (I/O)',
    description: 'Moving data in and out of the application console or environment.',
    items: [
      {
        name: 'Console Output Logging',
        desc: 'Outputting information for debugging.',
        code: `// Standard log
console.log("Values:", a, b);

// Error and Warning outputs (shows red/yellow in consoles)
console.error("Critical Failure!");
console.warn("Deprecation warning.");

// Display object data as a neat table
console.table([{ name: "A", id: 1 }, { name: "B", id: 2 }]);`
      },
      {
        name: 'Browser Interaction (Window)',
        desc: 'Native browser popups for user input.',
        code: `// Show simple message box
alert("Process complete!");

// Ask yes/no question
const proceed = confirm("Are you sure you want to delete this?");

// Request text input
const username = prompt("Enter your username: ");`
      }
    ]
  },
  {
    id: 'error-handling',
    title: 'Error Handling',
    description: 'Safely catching breaks to prevent application crashes and deal with failures.',
    items: [
      {
        name: 'Try / Catch / Finally',
        desc: 'Gracefully handling code that might throw an error.',
        code: `try {
  // Code that might fail
  const parsed = JSON.parse(malformedString);
} catch (error) {
  // Runs if the try block fails
  console.log("Failed to parse", error.message);
} finally {
  // Runs NO MATTER WHAT (success or failure)
  // Good for cleanup (e.g. closing loading spinners)
  setLoading(false);
}`
      },
      {
        name: 'Throwing Custom Errors',
        desc: 'Creating custom error messages for invalid internal states.',
        code: `function withdraw(amount) {
  if (amount > balance) {
    throw new Error("Insufficient funds for withdrawal");
  }
  balance -= amount;
  return balance;
}`
      }
    ]
  },
  {
    id: 'file-handling',
    title: 'File System Operations',
    description: 'Reading, writing, and appending to files on the host system (Node.js).',
    items: [
      {
        name: 'Reading a File',
        desc: 'Accessing data from the disk.',
        code: `const fs = require('fs');

// Asynchronous (Non-blocking, Callback)
fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Synchronous (Blocking - useful on boot up)
const text = fs.readFileSync('data.txt', 'utf8');`
      },
      {
        name: 'Writing and Appending',
        desc: 'Saving data back to disk.',
        code: `const fs = require('fs');

// Overwrite the file completely
fs.writeFileSync('output.txt', 'Hello User!');

// Append text to the end of the file
fs.appendFileSync('log.txt', '\\nSystem booted at 12:00');`
      }
    ]
  },
  {
    id: 'common-algorithms',
    title: 'Common Algorithms',
    description: 'Recognizable structural patterns for evaluating logic.',
    items: [
      {
        name: 'Binary Search',
        desc: 'O(log n) efficiency. Array MUST be sorted. Rapidly splits search area in half continually.',
        code: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while(left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if(arr[mid] === target) return mid; // Found it
    
    if(arr[mid] < target) {
      left = mid + 1; // Discard left half
    } else {
      right = mid - 1; // Discard right half
    }
  }
  return -1; // Not found
}`
      },
      {
        name: 'Recursive Patterns',
        desc: 'A function that calls itself until it hits base case. Used heavily in tree traversal.',
        code: `function factorial(n) {
  // Base case: Exit condition
  if (n === 0 || n === 1) return 1;
  
  // Recursive case
  return n * factorial(n - 1);
}

factorial(5); // 120`
      }
    ]
  },
  {
    id: 'time-complexity',
    title: 'Time Complexity (Big O)',
    description: 'A way to describe how the runtime of an algorithm grows as the input data grows.',
    items: [
      {
        name: 'O(1) - Constant Time',
        desc: 'Runtime is exactly the same regardless of data size. (Fastest)',
        code: `// Retrieving an element by index from an array
const getFirstItem = (arr) => arr[0];

// Accessing an object property by key
const getName = (obj) => obj.name;`
      },
      {
        name: 'O(n) - Linear Time',
        desc: 'Runtime grows 1:1 with data size. Loop runs once for every item.',
        code: `// A single for loop searching through an array
function search(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return true;
  }
}`
      },
      {
        name: 'O(n²) - Quadratic Time',
        desc: 'Highly inefficient for large datasets. Usually a loop within a loop.',
        code: `// Comparing every item against every other item
function findDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === arr[j]) {
        return true;
      }
    }
  }
}`
      }
    ]
  },
  {
    id: 'useful-shortcuts',
    title: 'Editor Productivity',
    description: 'How to traverse IDE environments quickly without using a mouse.',
    items: [
      {
        name: 'VS Code Hotkeys (Essential)',
        desc: 'The difference between writing code and flying through it.',
        code: `Cmd/Ctrl + P          => Quick Search / Open File
Cmd/Ctrl + Shift + P  => Command Palette (Run ANY action)
Cmd/Ctrl + /          => Toggle Comment
Cmd/Ctrl + B          => Toggle Sidebar pane

Alt/Opt + Up/Down     => Move entire line up or down
Shift + Alt + Up/Down => Duplicate line directly up/down
Cmd/Ctrl + D          => Multi-select next occurrence of word
Alt + Click           => Multi-cursor select`
      }
    ]
  }
];
