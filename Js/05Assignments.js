// # Assignment 5 — API Simulation

// This is one of the most important assignments.

// Pretend you have a backend API.

// Start with:

// ```js
// const users = [];
// ```

// Create:

// ```js
// createUser()
// getUsers()
// getUserById()
// updateUser()
// deleteUser()
// ```

// Example:

// ```js
// createUser({
//   name: "Nikhil",
//   email: "nikhil@example.com"
// });
// ```

// Then:

// ```js
// getUsers();
// ```

// Then:

// ```js
// updateUser(1, {
//   name: "Nikhil Sharma"
// });
// ```

// Then:

// ```js
// deleteUser(1);
// ```

// Handle these cases:

// - User doesn't exist
// - Email already exists
// - Invalid ID
// - Missing required fields
// - Invalid email
// - Empty name

// ### Extra challenge

// Return objects that look like API responses:

// ```js
// {
//   success: true,
//   data: user,
//   message: "User created successfully"
// }
// ```

// For errors:

// ```js
// {
//   success: false,
//   data: null,
//   message: "User not found"
// }
// ```

// ### Concepts being tested

// - CRUD
// - Functions
// - Validation
// - Objects
// - Arrays
// - Error handling
// - API thinking

// ---
