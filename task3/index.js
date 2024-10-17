// 2. Create the getUserInfo function
function getUserInfo(user) {
    var _a;
    return {
        name: user.name,
        age: (_a = user.age) !== null && _a !== void 0 ? _a : 'Age not provided' // Use nullish coalescing to provide a default message
    };
}
// 3. Create a user object
var userWithAge = { name: 'John', age: 30 };
var userWithoutAge = { name: 'Jane' };
// 4. Call the function with both user objects
console.log(getUserInfo(userWithAge)); // Output: { name: 'John', age: 30 }
console.log(getUserInfo(userWithoutAge)); // Output: { name: 'Jane', age: 'Age not provided' }