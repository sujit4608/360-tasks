// 1. Define the User interface
interface User {
    name: string;      // Required property
    age?: number;      // Optional property
  }
  
  // 2. Create the getUserInfo function
  function getUserInfo(user: User) {
    return {
      name: user.name,
      age: user.age ?? 'Age not provided' // Use nullish coalescing to provide a default message
    };
  }
  
  // 3. Create a user object
  const userWithAge = { name: 'John', age: 30 };
  const userWithoutAge = { name: 'Jane' };
  
  // 4. Call the function with both user objects
  console.log(getUserInfo(userWithAge)); // Output: { name: 'John', age: 30 }
  console.log(getUserInfo(userWithoutAge)); // Output: { name: 'Jane', age: 'Age not provided' }
  