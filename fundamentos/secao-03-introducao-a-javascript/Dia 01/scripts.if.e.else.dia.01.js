let trybe = 14;

if (trybe >= 14 && trybe < 14.40) {
    console.log("Esquenta");
}

else if (trybe >= 16.30 && trybe < 17.50) {
    console.log("Aula ao vivo");
}

else if (trybe >= 19.40 && trybe < 20) {
    console.log("Fechamento");
}

else {
    console.log("Fora dos momentos síncronos");
}

let notaDesafio = 90;

if (notaDesafio >= 80) {
    console.log("Parabéns, você faz parte do grupo de pessoas aprovadas!");
}

else if (notaDesafio < 80 && notaDesafio >= 60) {
    console.log("Você está na nossa lista de espera.");
}
else if(notaDesafio < 60) {
    console.log("Infelizmente, você reprovou");
}