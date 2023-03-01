let saldo = 100;


function somaDoSaldo(valor){
    return "Seu saldo é de " + (saldo + valor) + " reais."
};

function subtraiDoSaldo(valor){
    return "Seu saldo é de " + (saldo - valor) + " reais."
};

function multiplicaSaldo(valor){
    return "Seu saldo é de " + (saldo * valor) + " reais."
};

function divideSaldo(valor){
    return "Seu saldo é de " + (saldo / valor) + " reais."
};
    console.log(somaDoSaldo(200));
    console.log(subtraiDoSaldo(20));
    console.log(multiplicaSaldo(10));
    console.log(divideSaldo(50));