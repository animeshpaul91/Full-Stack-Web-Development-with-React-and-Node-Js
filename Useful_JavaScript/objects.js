const person = {
    name: "Animesh Paul", 
    age: 29, 
    greet() {
        console.log("Hi, I am " + this.name);
        // Array founction would render undefined here as this with array function refers to node runtime rather than this object
    }
};

// console.log(person);
person.greet()