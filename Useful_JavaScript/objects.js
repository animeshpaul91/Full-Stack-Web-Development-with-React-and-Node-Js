const person = {
    name: "Animesh Paul", 
    age: 29, 
    greet() {
        console.log("Hi, I am " + this.name);
        // Arrow founction would render undefined here as this with arrow function refers to node runtime rather than this object
    }
};

// console.log(person);
person.greet()