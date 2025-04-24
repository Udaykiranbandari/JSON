
// *why this output*
// 1. Arrow Functions and this:

// Arrow functions do not have their own this.

// Instead, they inherit this from the lexical scope in which they were defined.

// In this case, this inside the arrow function does not refer to the obj, so this.age is undefined.



// ---

// 2. Async/Await Behavior:

// The await keyword pauses execution inside an async function until the awaited expression is resolved.

// However, console.log(...) is not a Promise, so await has no real effect here.

// Execution continues immediately after the log.



// ---

// 3. setTimeout Execution:

// setTimeout(obj.name(), 1000) executes obj.name() immediately, rather than passing it as a callback to be delayed.

// The result of obj.name() (which is a Promise) is passed to setTimeout, but this has no effect.



// ---

// 4. Variable Hoisting:

// var a; is hoisted to the top of its scope and initialized as undefined.

// So logging a prints undefined.



// ---

// 5. ReferenceError:

// The variable b is never declared, so accessing it causes a ReferenceError.

// This halts further code execution.



// ---



// ✅ Why Choose JavaScript Over Java?

// You’re building for the web: JS is built into every browser and is the only language that can run natively in browsers.

// You need quick results: JS has fewer setup requirements, letting you go from idea to prototype fast.

// Frontend development: JavaScript (and frameworks like React, Vue, etc.) are the standard for building modern UIs.

// Full-stack development: With Node.js, you can use JS on both frontend and backend.

// Large ecosystem: npm (Node package manager) provides millions of packages to speed up development.

// Choose JavaScript if you're doing web development, need rapid prototyping, or want one language for full-stack apps.
// Choose Java if you're building large-scale enterprise systems, Android apps, or performance-heavy backend systems.
