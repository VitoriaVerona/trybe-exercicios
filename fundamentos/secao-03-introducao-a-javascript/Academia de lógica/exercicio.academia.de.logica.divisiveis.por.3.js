let inicial = 80;
let final = 150
let contagem = 0;

for (let index = inicial; index <= final; index += 1) {
  if (index % 3 == 0) {
    contagem += 1;
  }
}
if (contagem < 50) {
  console.log('Sequência muito pequena.');
} else {
  console.log('Há 50 ou mais números diviseis por 3');
}
