let name = "Max";
let age = 29;
let hasHobbies = true;

const PI = 3.141;

// function summarizeUsers(name, age, hobby) {
//     return "Name is: " + name + ". Age is: " + age + ". Hobby is: " + hobby;
// }


// Anonymous Functions

// const summarizeUsers = function (name, age, hobby) {
//     return "Name is: " + name + ". Age is: " + age + ". Hobby is: " + hobby;
// }

// Arrow Functions

const summarizeUsers = (name, age, hobby) => {
    return "Name is: " + name + ". Age is: " + age + ". Hobby is: " + hobby;
}

console.log(summarizeUsers("Animesh Paul", 18, "Music"));

const add = (a, b) => a + b;

console.log(add(6, 8));

const square = a => a * a;

console.log(square(6));

const random = () => Math.floor(Math.random() * 10); // returns a random number between 0 and 9

console.log(random());

