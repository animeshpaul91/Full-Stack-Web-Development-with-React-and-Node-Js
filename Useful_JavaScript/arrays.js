const items = [1, 2, 3, 4, 5, 6, 7];

// for(let item of items) {
//     console.log(item);
// }


items.push(8);
console.log(items.map(x => x * x));
console.log(items);

// Arrays and Objects are references, not primitives

// const against arrays still allow the array to be mutated but not reinitialized because the address in memory has not changed