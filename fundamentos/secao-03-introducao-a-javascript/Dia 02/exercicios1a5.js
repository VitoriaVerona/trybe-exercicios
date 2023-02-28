let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultOfSum = 0;
let result = 0;

for (let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index]);
    resultOfSum += numbers[index];
  
}

console.log(resultOfSum);

let avarege = resultOfSum / numbers.length 
console.log(avarege);

if (avarege > 20){
    console.log("Valor maior que 20");
} else if (avarege < 20){
    console.log("Valor menor que 20");
} else {
    console.log("Valor inválido");
}

let higherNumber = numbers[0];

for(let index = 1; index < numbers.length; index +=1){
    if(numbers[index] > higherNumber){
        higherNumber = numbers[index];
    }
}

console.log(higherNumber);



