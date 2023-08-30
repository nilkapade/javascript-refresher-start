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

// function storeOrder({id, currency}) { // destructuring
//     localStorage.setItem('id', id);
//     localStorage.setItem('currency', currency);
//     console.log(id);
//     console.log(currency);
//     console.log(amount);
// }

// storeOrder({id: 5, currency: 'USD', amount: 15.99}); 



