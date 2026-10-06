const users = [
  { id: 1, name: "Nikhil", age: 22, isActive: true },
  { id: 2, name: "Rahul", age: 17, isActive: false },
  { id: 3, name: "Aman", age: 25, isActive: true },
  { id: 4, name: "Rohit", age: 19, isActive: true },
  { id: 5, name: "Vikas", age: 16, isActive: false }
];
// ```

// Do these without looking up the solution:

// 1. Get all active users.
// 2. Get all users whose age is 18 or above.
// 3. Get an array containing only the names.
// 4. Find the user with `id === 3`.
// 5. Check whether there is any inactive user.
// 6. Check whether all users are above 15.
// 7. Get the total age of all users.
// 8. Create a new array where each user has:

// ```js
// {
    //   ...user,
    //   canVote: true/false
    // }
    // ```
    
    // `canVote` should be `true` if age >= 18.
    
    // ### Concepts being tested
    
    // - Arrays
    // - Objects
    // - `map`
    // - `filter`
    // - `find`
    // - `some`
    // - `every`
    // - `reduce`
    // - Spread syntax
    // - Conditions
    
    // 1. Get all active users.
    
    const activeUsers = users.filter((user) =>  {
        return user.isActive
    })
    
    console.log("01 All Active user : ", activeUsers)
    
    // 2. Get all users whose age is 18 or above.
    
    const maruteUser = users.filter((user) =>{
        return user.age >= 18;
    })
    
    console.log("02 Matured User : ", maruteUser)
    
    
    // 3. Get an array containing only the names.
    const nameArr = users.map((user) =>{
        return user.name
    })
    
    console.log("03 An Arry with all users name :" , nameArr);
    
    // 4. Find the user with `id === 3`.
    const findUser = (id) => {
        return users.find((user)=>{
            return user.id == id
        })
    }
    
    console.log('04 finding user with id 5 :' , findUser(5))
    
    
    // 5. Check whether there is any inactive user.
    
    const inactiveUser = users.some((user) => {
        return user.isActive == false
    })
    
    if (inactiveUser) {
        console.log("05 There is an Inactive usesr")
        const inactiveUserList = users.filter((user)=>{
            return !user.isActive
        })
        console.log(inactiveUserList);    
    } else {
        console.log("05 There is no Inactive usesr") 
    }
    
    
    // 6. Check whether all users are above 15.
    const isAllAbove = users.every((user)=> {
        return user.age > 15
    })
    
    if(isAllAbove){
        console.log('06 Yes all users are above 15')
    }else{
        console.log('06 No all users are not above 15')
    }
    
    // 7. Get the total age of all users.
    
     const totAge = users.reduce((accumulator, currentItem  ) => {
        return  accumulator + currentItem.age
    }, 0)
    
    console.log('07 Total age of users : ' , totAge)
    
    
    // 8. Create a new array where each user has:
    
    // ```js
    // {
        //   ...user,
        //   canVote: true/false
        // }
        // ```
        
        // `canVote` should be `true` if age >= 18.

    const canVoteUser = users.map((user)=> {
        let canVote = false
        if(user.age >= 18){
            canVote = true
        }
        return{
            ...user , 
            canVote
        }
        
    })

    console.log(canVoteUser);
    