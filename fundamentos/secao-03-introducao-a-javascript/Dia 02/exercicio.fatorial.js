let number = 10;
let factorial = number;

for (let index = number - 1; index >= 1; index -= 1) {
    factorial = factorial * index;
}
console.log(factorial)