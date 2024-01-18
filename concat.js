
const negative = [-1,-2,-3];
const positive = [1,2,3];
const zero = 0;

let numbers = negative.concat(zero, positive);

console.log(numbers);

// iterar um array é percorre-lo

numbers.forEach(x => {
console.log(x % 2 === 0);
});