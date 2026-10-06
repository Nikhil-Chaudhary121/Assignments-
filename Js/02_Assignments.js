// Assignment 2 — Build a Search Function

// Create:
const users = [
  { id: 1, name: "Nikhil", age: 22, isActive: true },
  { id: 2, name: "Rahul", age: 17, isActive: false },
  { id: 3, name: "Aman", age: 25, isActive: true },
  { id: 4, name: "Rohit", age: 19, isActive: true },
  { id: 5, name: "Vikas", age: 16, isActive: false }
];

function searchUsers(users, searchTerm) {
  // ...
  // 
  const user = users.filter((user)=>{
    let username = user.name.slice(0 , searchTerm.length).toLowerCase()
    return username === searchTerm.toLowerCase();
  })
  console.log(user);
  
}

// It should search by name.

Example:

searchUsers(users, "nik")

// should return Nikhil.

// It should work regardless of capitalization:

searchUsers(users, "NIK")
searchUsers(users, "Nik")
searchUsers(users, "nik")

// all should work.