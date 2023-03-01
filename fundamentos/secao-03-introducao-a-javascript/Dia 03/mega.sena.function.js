//Sorteio dos números
let lotteryNumbers = [];
let firstGame = [];

function generateLotteryNumbers(quantity, maxNumber, array){
    for (let index = 0; index < quantity; index += 1){
        let randomNumber = Math.ceil(Math.random() * maxNumber);
    if (!array.includes(randomNumber)){
        array.push(randomNumber)
    } else {
        index -= 1; /* Evitar números repetidos */
    }
}

}

generateLotteryNumbers(6, 60, lotteryNumbers);
generateLotteryNumbers(6, 60, firstGame);


//Comparação do sorteio com o meu jogo
let numberOfHits = 0;
let hits = [];

for (let indexLottery = 0; indexLottery < lotteryNumbers.length;indexLottery += 1) {
    for (let indexGame = 0; indexGame < firstGame.length; indexGame += 1){
        if (lotteryNumbers[indexLottery] === firstGame[indexGame]){
            numberOfHits += 1;
            hits.push(lotteryNumbers[indexLottery]);
         }
        }
    }

    console.log("Números sorteados: ", lotteryNumbers);
    console.log("Números jogados: ", firstGame);
    console.log("Quantidade de acertos: ", numberOfHits);
    console.log("Números acertados: ", hits);










//console.log(Math.random() * 60); /* Gera um número aleatória entr 0 e 60 */
//console.log(Math.ceil(Math.random() * 60)); /* Arredonda o número para cima */
//Math.floor()/* Arredonda o número para baixo */