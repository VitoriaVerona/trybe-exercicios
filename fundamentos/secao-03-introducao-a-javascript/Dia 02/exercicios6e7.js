let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  }
}

if (result === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(result);
}

let smallestNumber = numbers[0];

for(let index = 1; index < numbers.length; index +=1){
    if(numbers[index] < smallestNumber){
        smallestNumber = numbers[index];
    }
}

console.log(smallestNumber);
