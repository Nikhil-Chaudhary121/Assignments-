Assignment 2 — Build a Search Function

Create:

function searchUsers(users, searchTerm) {
  // ...
}

It should search by name.

Example:

searchUsers(users, "nik")

should return Nikhil.

It should work regardless of capitalization:

searchUsers(users, "NIK")
searchUsers(users, "Nik")
searchUsers(users, "nik")

all should work.