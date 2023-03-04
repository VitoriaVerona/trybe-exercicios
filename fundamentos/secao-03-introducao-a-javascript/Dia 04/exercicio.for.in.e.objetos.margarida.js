let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };

//Imprima no console uma mensagem de boas-vindas para a personagem acima, na qual tenha o nome dela. Para isso, utilize a sintaxe meuObjeto.chave. Então, o valor esperado no console é: 'Bem-vinda, Margarida'

console.log('Bem-vinda, ' + info.personagem);

//Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Para isso, use a sintaxe meuObjeto['chave'] = valor. Então, o valor esperado no console é: recorrente: Sim.

let newKey = 'recorrente';
let recorrente = 'Sim'
function addNewProperty(object, key, value) {
    object[key] = value;
};
addNewProperty(info, newKey, recorrente);
console.log(info);

//Faça um for/in que mostre todas as chaves do objeto. O valor esperado no console é: personagem, origem, nota, reccorente.

for(keys in info){
    console.log(keys);
}

//Faça um novo for/in, mas agora mostre todos os valores das propriedades do objeto. O valor esperado no console é: Margarida, Pato Donald, Namorada do personagem principal nos quadrinhos do Pato Donald, sim.

for(key in info){
    console.log(info[key]);
}

//Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: “Tio Patinhas”, “Christmas on Bear Mountain, Dell’s Four Color Comics #178”, “O último MacPatinhas”, “Sim”. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. O valor esperado no console é: Margarida e Tio Patinhas Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178 Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas Ambos recorrentes // Atenção para essa última linha!
for(let key in info){
    if( key === 'recorrente' && info[key] === 'Sim' && info2[key] === 'Sim'){
        console.log('Ambos recorrentes');
    } else{
    console.log(info[key] + ' e ' + info2[key]);
}
}