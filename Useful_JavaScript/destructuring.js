const person = {
    name: "Animesh Paul", 
    age: 29, 
    greet() {
        console.log("Hi, I am " + this.name);
        // Array founction would render undefined here as this with array function refers to node runtime rather than this object
    }
};

const printName = person => console.log(person.name);

printName(person);

const destructure = ({ name }) => { // property name is passed in. Exaple of destructuting   with functions
    console.log(name);
}

destructure(person);

const {name, age} = person; // object . Need to use the same property names
console.log(name, age);

// destructuring Arrays

const hobbies = ["Swimming", "Skiing"];
const [hobby1, hobby2] = hobbies; // cannot have more than the numbers of items in the array
console.log(hobby1, hobby2);