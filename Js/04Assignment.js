// # Assignment 4 — Async JavaScript

// Create:
const users = [
  { id: 1, name: "Nikhil", age: 22, isActive: true },
  { id: 2, name: "Rahul", age: 17, isActive: false },
  { id: 3, name: "Aman", age: 25, isActive: true },
  { id: 4, name: "Rohit", age: 19, isActive: true },
  { id: 5, name: "Vikas", age: 16, isActive: false }
];

// ```js
async function getUser  (id) {
      const data = setTimeout(() => {
      console.log("Hii from inside")
      return {id : 1 , name : "nikhil"}
      }, 1000);
      return data
      console.log("hii from outside")// ...
} // ```

// Pretend this function is requesting data from a database.
// Use `setTimeout` to simulate a 1-second delay.

// For example:

// ```js
const data = await getUser(1);
console.log(data);

// ```

// should eventually return:

// ```js
// {
//   id: 1,
//   name: "Nikhil"
// }
// ```

// Create:

// ```js
async function getUserProfile(id) {
  // ...
}
// ```

// It should get the user and return:

// ```js
// {
//   id: 1,
//   name: "Nikhil",
//   profile: "Developer"
// }
// ```

// Handle an invalid user properly using:

// ```js
// try {
//   // ...
// } catch (error) {
//   // ...
// }
// ```

// ### Extra challenges

// 1. Create `getPosts(userId)`.
// 2. Get the user and their posts.
// 3. Understand the difference between sequential and parallel async operations.
// 4. Try using `Promise.all()`.

// ### Concepts being tested

// - Promises
// - `async`
// - `await`
// - `try/catch`
// - `setTimeout`
// - Error handling
// - `Promise.all`

// ---
