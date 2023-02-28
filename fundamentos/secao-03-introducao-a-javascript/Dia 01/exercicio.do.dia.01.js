let a = 10;
let b = 5;
let c = 3;
let number = -8

console.log("Soma: " + (a+b));
console.log("Subtração: " + (a-b));
console.log("Multiplicação: " + (a*b));
console.log("Divisão: " + (a/b));
console.log("Módulo: " + (a%b));

if (a > b) {
    console.log("A é maior do que B");
}

else if (b > a){
    console.log("B é maior que A");
}

else{
    console.log("Os números são iguais");
}

if (a > b && a > c){
    console.log("O maior número é " + a);
}

else if (b > a && b > c){
    console.log("O maior número é " + b);
}
else{
    console.log("O maior número é " + c);
}

if (number > 0) {
    console.log("positive");
}
else if (number < 0){
    console.log("negative");
}
else{
    console.log("zero");
}