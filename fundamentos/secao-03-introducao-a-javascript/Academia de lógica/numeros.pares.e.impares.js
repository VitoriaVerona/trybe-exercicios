// Exercício 2 - Crie uma função que, dado um array de números inteiros,
// retorne a quantidade de números pares e ímpares no formato:

// Exemplo ilustrativo abaixo
let numeros = {
    pares: 0,
    ímpares: 0,
  };
  
  function oddAndEven(array) {
    let countOdds = 0; // count odd = quantidade de impares
    let countEven = 0; // even = par
  
    for (let index = 0; index < array.length; index += 1) {
      // array [............]
      // array[index] -> o valor especifico da posição index
      if (array[index] % 2 === 0) { // é par
        countEven += 1;
      } else {
        countOdds += 1;
      }
    }
  
    return { 
      pares: countEven, 
      ímpares: countOdds
    };
  }
  
  console.log(oddAndEven([23, 9, 56, 7, 5, 6, 18, 31, -1]));
  console.log(-1 % 2); 