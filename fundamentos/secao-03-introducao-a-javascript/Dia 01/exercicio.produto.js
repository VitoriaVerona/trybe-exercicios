let custoDoProduto = 10;
let valorDeVenda = 30;
if (custoDoProduto >= 0 && valorDeVenda >= 0){
let custoTotal = custoDoProduto * 1.2; /* 20% de impostos */
let lucro = (valorDeVenda - custoTotal)* 1000;
console.log(lucro);
} else {
    console.log("Erro, os valores não podem ser negativos");
}
