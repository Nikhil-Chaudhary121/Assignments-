# JavaScript Assignments — Full-Stack Preparation

## Goal

Use these assignments to test whether your JavaScript is strong enough to move into TypeScript, Express, PostgreSQL, and Next.js.

### Rules

- Try to solve the problems yourself.
- Google syntax when you forget it.
- Do NOT search for complete solutions.
- Don't restart JavaScript from zero unless an assignment exposes a real gap.
- Focus on understanding the logic, not memorizing syntax.
- Write clean, readable code.
- Use functions where appropriate.
- For async assignments, handle errors properly.

---

# Assignment 1 — User Data

Create this array:

```js
const users = [
  { id: 1, name: "Nikhil", age: 22, isActive: true },
  { id: 2, name: "Rahul", age: 17, isActive: false },
  { id: 3, name: "Aman", age: 25, isActive: true },
  { id: 4, name: "Rohit", age: 19, isActive: true },
  { id: 5, name: "Vikas", age: 16, isActive: false }
];
```

Do these without looking up the solution:

1. Get all active users.
2. Get all users whose age is 18 or above.
3. Get an array containing only the names.
4. Find the user with `id === 3`.
5. Check whether there is any inactive user.
6. Check whether all users are above 15.
7. Get the total age of all users.
8. Create a new array where each user has:

```js
{
  ...user,
  canVote: true/false
}
```

`canVote` should be `true` if age >= 18.

### Concepts being tested

- Arrays
- Objects
- `map`
- `filter`
- `find`
- `some`
- `every`
- `reduce`
- Spread syntax
- Conditions

---

# Assignment 2 — User Search

Using the same users array, create:

```js
function searchUsers(users, searchTerm) {
  // ...
}
```

It should search users by name.

Example:

```js
searchUsers(users, "nik");
```

should return Nikhil.

The search should be case-insensitive:

```js
searchUsers(users, "NIK");
searchUsers(users, "Nik");
searchUsers(users, "nik");
```

All should find Nikhil.

### Extra challenges

1. Search by partial name.
2. Return an empty array if nothing matches.
3. Ignore accidental spaces around the search term.

### Concepts being tested

- Functions
- Strings
- `toLowerCase`
- `includes`
- `trim`
- Array methods

---

# Assignment 3 — Shopping Cart

Create:

```js
const cart = [
  { id: 1, name: "Keyboard", price: 2000, quantity: 2 },
  { id: 2, name: "Mouse", price: 800, quantity: 1 },
  { id: 3, name: "Monitor", price: 12000, quantity: 2 }
];
```

Create these functions:

```js
getCartTotal(cart)
getTotalItems(cart)
findProduct(cart, productId)
removeProduct(cart, productId)
updateQuantity(cart, productId, quantity)
```

Expected behavior:

```js
getCartTotal(cart);
// 28800

getTotalItems(cart);
// 5
```

Example:

```js
findProduct(cart, 2);
// { id: 2, name: "Mouse", price: 800, quantity: 1 }
```

### Important

Do NOT modify the original `cart` when removing or updating products.

Return a new array.

### Extra challenges

- Reject quantity <= 0.
- Handle a product that doesn't exist.
- Add `addProduct(cart, product)`.
- Prevent duplicate product IDs.

### Concepts being tested

- Functions
- Array methods
- Objects
- Immutability
- Spread syntax
- Validation

---

# Assignment 4 — Async JavaScript

Create:

```js
function getUser(id) {
  // ...
}
```

Pretend this function is requesting data from a database.

Use `setTimeout` to simulate a 1-second delay.

For example:

```js
getUser(1);
```

should eventually return:

```js
{
  id: 1,
  name: "Nikhil"
}
```

Create:

```js
async function getUserProfile(id) {
  // ...
}
```

It should get the user and return:

```js
{
  id: 1,
  name: "Nikhil",
  profile: "Developer"
}
```

Handle an invalid user properly using:

```js
try {
  // ...
} catch (error) {
  // ...
}
```

### Extra challenges

1. Create `getPosts(userId)`.
2. Get the user and their posts.
3. Understand the difference between sequential and parallel async operations.
4. Try using `Promise.all()`.

### Concepts being tested

- Promises
- `async`
- `await`
- `try/catch`
- `setTimeout`
- Error handling
- `Promise.all`

---

# Assignment 5 — API Simulation

This is one of the most important assignments.

Pretend you have a backend API.

Start with:

```js
const users = [];
```

Create:

```js
createUser()
getUsers()
getUserById()
updateUser()
deleteUser()
```

Example:

```js
createUser({
  name: "Nikhil",
  email: "nikhil@example.com"
});
```

Then:

```js
getUsers();
```

Then:

```js
updateUser(1, {
  name: "Nikhil Sharma"
});
```

Then:

```js
deleteUser(1);
```

Handle these cases:

- User doesn't exist
- Email already exists
- Invalid ID
- Missing required fields
- Invalid email
- Empty name

### Extra challenge

Return objects that look like API responses:

```js
{
  success: true,
  data: user,
  message: "User created successfully"
}
```

For errors:

```js
{
  success: false,
  data: null,
  message: "User not found"
}
```

### Concepts being tested

- CRUD
- Functions
- Validation
- Objects
- Arrays
- Error handling
- API thinking

---

# Assignment 6 — Product Management

Create:

```js
const products = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 70000,
    stock: 5
  },
  {
    id: 2,
    name: "Keyboard",
    category: "Electronics",
    price: 2000,
    stock: 20
  },
  {
    id: 3,
    name: "Chair",
    category: "Furniture",
    price: 8000,
    stock: 10
  },
  {
    id: 4,
    name: "Desk",
    category: "Furniture",
    price: 15000,
    stock: 3
  }
];
```

Create functions:

```js
searchProducts()
filterByCategory()
filterByPrice()
sortProducts()
getProductsInStock()
getTotalInventoryValue()
```

### Requirements

`searchProducts()` should search by product name.

`filterByCategory()` should filter by category.

`filterByPrice()` should allow a minimum and maximum price.

`sortProducts()` should support:

```text
price-low
price-high
name-a-z
name-z-a
```

`getProductsInStock()` should return products with stock > 0.

`getTotalInventoryValue()` should calculate:

```text
price × stock
```

for every product.

### Extra challenge

Create one function that combines:

```text
search
+ category filter
+ price filter
+ sorting
```

---

# Assignment 7 — Nested Data

Create:

```js
const orders = [
  {
    id: 1,
    customer: {
      name: "Nikhil",
      email: "nikhil@example.com"
    },
    items: [
      { product: "Keyboard", price: 2000, quantity: 1 },
      { product: "Mouse", price: 800, quantity: 2 }
    ]
  },
  {
    id: 2,
    customer: {
      name: "Rahul",
      email: "rahul@example.com"
    },
    items: [
      { product: "Monitor", price: 12000, quantity: 1 }
    ]
  }
];
```

Create:

```js
getOrderTotal(order)
getAllCustomers(orders)
getAllProducts(orders)
getOrdersByCustomer(orders, customerName)
getMostExpensiveOrder(orders)
```

### Extra challenge

Calculate the total revenue from all orders.

### Concepts being tested

- Nested objects
- Nested arrays
- `map`
- `reduce`
- Functions
- Data transformation

---

# Assignment 8 — Fetch API

Use a public API.

Write an async function that:

1. Makes a GET request.
2. Checks whether the request succeeded.
3. Converts the response to JSON.
4. Returns the data.
5. Handles errors.

Start with:

```js
async function fetchUsers() {
  // ...
}
```

Then:

```js
async function fetchUserById(id) {
  // ...
}
```

Then create:

```js
async function fetchUserPosts(userId) {
  // ...
}
```

### Extra challenge

Create a function that:

```text
fetches a user
      ↓
fetches their posts
      ↓
returns both
```

Handle:

- Network errors
- HTTP errors
- Invalid IDs

### Concepts being tested

- `fetch`
- Promises
- `async/await`
- JSON
- HTTP basics
- Error handling

---

# Assignment 9 — Authentication Simulation

Build a simple authentication system without Express.

Create:

```js
const users = [];
```

Create:

```js
register()
login()
logout()
getCurrentUser()
```

Registration should require:

```text
name
email
password
```

Requirements:

- Email must be unique.
- Password must not be empty.
- Login should check email/password.
- Login should create a fake session.
- Logout should destroy the session.
- `getCurrentUser()` should return the logged-in user.

### Important

Do NOT store plain passwords in a real application.

For this assignment, you are only simulating authentication.

### Extra challenge

Create role-based authorization:

```text
admin
user
```

Create:

```js
isAdmin()
```

---

# Assignment 10 — File/Data Processing

Create an array of transaction objects:

```js
const transactions = [
  { id: 1, type: "income", amount: 50000 },
  { id: 2, type: "expense", amount: 12000 },
  { id: 3, type: "expense", amount: 5000 },
  { id: 4, type: "income", amount: 20000 },
  { id: 5, type: "expense", amount: 3000 }
];
```

Create:

```js
getTotalIncome()
getTotalExpenses()
getBalance()
getLargestExpense()
```

Expected:

```text
Total income = 70000
Total expenses = 20000
Balance = 50000
```

### Extra challenge

Create a monthly summary object.

---

# Assignment 11 — JavaScript Classes

Create a `User` class.

It should contain:

```text
name
email
age
```

Methods:

```text
getInfo()
isAdult()
```

Create an `Admin` class that extends `User`.

Add:

```text
role
deleteUser()
```

### Extra challenge

Create a `BankAccount` class:

```text
deposit()
withdraw()
getBalance()
```

Prevent withdrawing more money than the account contains.

### Concepts being tested

- Classes
- Constructors
- Methods
- `this`
- Inheritance
- `extends`
- `super`

---

# Assignment 12 — Modules

Split your code into files.

Example:

```text
project/
│
├── users.js
├── products.js
├── utils.js
└── index.js
```

Export functions from one file and import them into another.

Create:

```js
createUser()
findUser()
deleteUser()
```

in `users.js`.

Then import and use them in `index.js`.

### Concepts being tested

- `export`
- `import`
- Modules
- Code organization

---

# Assignment 13 — Mini Backend Logic Challenge

Build a complete in-memory application.

Choose one:

### Option A — Job Application Tracker

Features:

```text
Create application
Get applications
Get application by ID
Update application
Delete application
Search applications
Filter by status
```

Application:

```js
{
  id,
  company,
  position,
  status,
  appliedAt,
  notes
}
```

Statuses:

```text
applied
interview
rejected
offer
accepted
```

### Option B — Product Catalog

Features:

```text
Create product
Get products
Get product
Update product
Delete product
Search
Filter by category
Sort by price
```

### Option C — Notes App

Features:

```text
Create note
Get notes
Get note
Update note
Delete note
Search notes
```

---

# Assignment 14 — Mini REST API Thinking Challenge

Before learning Express, take your Assignment 13 application and design its API.

For example, for a Job Application Tracker:

```text
POST   /applications
GET    /applications
GET    /applications/:id
PATCH  /applications/:id
DELETE /applications/:id
```

For each route decide:

1. What data does the client send?
2. What should the server return?
3. What happens if the resource doesn't exist?
4. What validation is required?
5. What HTTP status code should be returned?

Do NOT implement Express yet.

This assignment is about understanding how your JavaScript logic becomes a backend API.

---

# Final JavaScript Check

Before moving to TypeScript + Express, you should be comfortable with:

- [ ] Variables
- [ ] Conditions
- [ ] Loops
- [ ] Functions
- [ ] Arrays
- [ ] Objects
- [ ] Destructuring
- [ ] Spread/rest
- [ ] `map`
- [ ] `filter`
- [ ] `find`
- [ ] `some`
- [ ] `every`
- [ ] `reduce`
- [ ] String methods
- [ ] Array methods
- [ ] Modules
- [ ] Promises
- [ ] `async/await`
- [ ] `try/catch`
- [ ] `fetch`
- [ ] JSON
- [ ] CRUD logic
- [ ] Basic validation
- [ ] Basic error handling
- [ ] Basic OOP/classes

## Important

You do NOT need to memorize every method.

If you understand what you want to do and can look up syntax when you forget it, that's completely fine.

The real test is whether you can solve the assignments and explain your own code.

## After These Assignments

Your next path should be:

```text
JavaScript assignments
        ↓
TypeScript fundamentals
        ↓
Express + TypeScript
        ↓
PostgreSQL + SQL
        ↓
Prisma/Drizzle
        ↓
Authentication
        ↓
Next.js + TypeScript
        ↓
Connect frontend + backend
        ↓
Full-stack project
```

Do not try to learn everything before building.

Learn → build → get stuck → research → fix → continue.
