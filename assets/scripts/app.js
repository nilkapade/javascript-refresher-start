import { apikey } from "./util.js";

// console.log(apikey);

// //***** Objects  */
// const user = {
//   name: "XYZ",
//   age: 123,
//   greet(msg) {
//     console.log(this.age);
//     return "Welcome:" + msg;
//   }
// };

// console.log(user.greet(user.name));

// // creating objects using class keyword (blueprints)

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet(name) {
//     console.log("Hi!");
//   }
// }

// const u1 = new User("XYZ", 123);
// console.log(u1);
// u1.greet();

//*** Arrays */

// const hobbies = ["Sports", "Reading", "Cooking"];
// console.log(hobbies[0])

// hobbies.push("Trekking");
// console.log(hobbies);

// // const index = hobbies.findIndex((item) => {
// //     return item === "Trekking";
// // });

// const index = hobbies.findIndex((item) => item === "Trekking");
// console.log(index);

// // const editedMap = hobbies.map((item) => item + "!");
// // console.log(editedMap);

// const editedMap = hobbies.map((item) => ({text: item}));
// console.log(editedMap);

// Destructuring

// const [firstName, lastName] = ["Max", "Schwarzmuller"];
// //const firstName = names[0];
// //const lastName = name[1];
// console.log(firstName);
// console.log(lastName);

// const {name, age} = {
//     name: "XYZ",
//     age: "123"
// }

// const {name: uName, age: UAge} = {
//     name: "XYZ",
//     age: "123"
// }
// //const name = user.name;
// //const age = user.age;
// console.log(uName);
// console.log(UAge);

// function storeOrder(order) {
//     localStorage.setItem('id', order.id);
//     localStorage.setItem('currency', order.currency);
// }

// function storeOrder({id, currency, amount}) { // destructuring
//     localStorage.setItem('id', id);
//     localStorage.setItem('currency', currency);
//     console.log(id);
//     console.log(currency);
//     console.log(amount);
// }

//  storeOrder({id: 5, currency: 'USD', amount: 15.99});

// Spread Operator

// const hobbies = ["Cooking", "Reading"];
// const newHobbies = ["Trekking"];
// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);

// const user = {
//     name: "John",
//     age: 13
// };

// const extendedUser = {
//     isAdmin: true,
//     ...user
// }

// console.log(extendedUser);

// Control Structures

// const string1 = "Hello";
// const string2 = "Hello";

// let obj1 = {
//     msg: "Hello"
// }

// let obj2 = {
//     msg: "Hello"
// }

// //obj1 = obj2;

// if (obj1 === obj2) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// if (obj1 == obj2) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// const hobbies = ["Cooking", "Reading"];

// for (const hobby of hobbies) {
//     console.log(hobby);
// }

// Passing Functions as Value

// function handleTimeout() {
//     console.log("Tiemout!");
// }

// const handleTimeout2 = () => {
//     console.log("Tiemout again...!");
// }

// setTimeout(handleTimeout, 2000);
// setTimeout(handleTimeout2, 3000);

// setTimeout( () => {
//     console.log("More Tiemout...!");
// }, 4000);

// function greeter(greetFn) {
//     greetFn();
// }

// //const str = "Hi!";
// greeter(() => {console.log("Hi!")});

// Defining Functions Inside of Functions

// function init () {
//     function greet () {
//         console.log("Hello!");
//     }
//     greet();
// }

// init();

// Reference vs Premittive Values

// String premittive types so can't be edited once assigned, it will always create new string
// Arrays are reference types, it edited original arrays. Arrays are Objects and Objects are reference types

// JS Array Functions

// Map  Array.prototype.map()
// The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

// const array1 = [1, 4, 9, 16];

// // Pass a function to map
// const map1 = array1.map((x) => x * 2);

// console.log(map1);
// Expected output: Array [2, 8, 18, 32]

//Find Array.prototype.find()
//The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
// If you need the index of the found element in the array, use findIndex().
// If you need to find the index of a value, use indexOf(). (It's similar to findIndex(), but checks each element for equality with the value instead of using a testing function.)
// If you need to find if a value exists in an array, use includes(). Again, it checks each element for equality with the value instead of using a testing function.
// If you need to find if any element satisfies the provided testing function, use some().

// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find((element) => element > 10);

// console.log(found);
// Expected output: 12

//Array.prototype.findIndex()
// The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
// See also the find() method, which returns the first element that satisfies the testing function (rather than its index).

// const array1 = [5, 12, 8, 130, 44];

// const isLargeNumber = (element) => element > 13;

// console.log(array1.findIndex(isLargeNumber));
// Expected output: 3

//Array.prototype.filter()
//The filter() method of Array instances creates a shallow copy of a portion of a given array, 
//filtered down to just the elements from the given array that pass the test implemented by the provided function.

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter((word) => word.length > 6);
// console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

//Array.prototype.reduce()
// The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array,
//  in order, passing in the return value from the calculation on the preceding element. The final result of running 
//  the reducer across all elements of the array is a single value.
// The first time that the callback is run there is no "return value of the previous calculation". 
// If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value 
// and iteration starts from the next element (index 1 instead of index 0).
// Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array:

// const array1 = [1, 2, 3, 4];
// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
// console.log(sumWithInitial);
// Expected output: 10

//Array.prototype.concat()
//The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);
// console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

//Array.prototype.slice()
// The slice() method of Array instances returns a shallow copy of a portion of an array
//  into a new array object selected from start to end (end not included) 
//  where start and end represent the index of items in that array. The original array will not be modified.

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(2));
// // Expected output: Array ["camel", "duck", "elephant"]
// console.log(animals.slice(2, 4));
// // Expected output: Array ["camel", "duck"]
// console.log(animals.slice(1, 5));
// // Expected output: Array ["bison", "camel", "duck", "elephant"]
// console.log(animals.slice(-2));
// // Expected output: Array ["duck", "elephant"]
// console.log(animals.slice(2, -1));
// // Expected output: Array ["camel", "duck"]
// console.log(animals.slice());
// // Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

//Array.prototype.splice()
//The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
//To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced(). To access part of an array without modifying it, see slice().

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // Inserts at index 1
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May');
// // Replaces 1 element at index 4
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "May"]


