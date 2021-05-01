const items = [1, 2, 3, 4, 5, 6, 7];

// for(let item of items) {
//     console.log(item);
// }


console.log(items.map(x => x * x));

const copy = items.slice(); // deep copy

const copied = [...items]; // spread operator (creates a deepcopy) flattens objects and arrays

items.push(8);
console.log(copy);
console.log(copied);


// rest operator

const toArray = (...args) => { // Can take n number of arguments
    return args;
}

console.log(toArray(1, 2, 3, 4));