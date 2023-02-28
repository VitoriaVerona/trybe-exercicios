let notaEmPorcentagem = 100;

if (notaEmPorcentagem < 0 || notaEmPorcentagem > 100){
    console.log("Erro, nota incorreta!");
} else if (notaEmPorcentagem >= 90){
    console.log("Sua nota é A");
} else if (notaEmPorcentagem >= 80){
    console.log("Sua nota é B");
} else if(notaEmPorcentagem >= 70){
    console.log("Sua nota é C");
} else if (notaEmPorcentagem >= 60){
    console.log("sua nota é D");
} else if(notaEmPorcentagem >= 50){
    console.log("Sua nota é E");
} else {
    console.log("Sua nota é F");
}