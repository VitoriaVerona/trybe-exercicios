// A liderança do setor de RH da empresa em que você trabalha
// está preocupada com a quantidade de ausências de algumas
// pessoas colaboradoras. Por isso, ela te pediu que faça
// uma consulta no banco de dados da empresa para saber quem
// é a pessoa que mais faltou até hoje no trabalho.
// Para isso você precisará navegar por um array de arrays,
// verificando quem é a pessoa que tem o maior número de faltas.

// O array é formado por arrays no seguinte padrão:
// [<nomeDaPessoa(string)>, <numeroDeFaltas(number)>].

const relatorio = [
    ['Jorge', 12],
    ['Simone', 1],
    ['Fernando', 21],
    ['Briano', 8],
    ['Teresa', 10],
    ['Liriam', 4]
  ];
  let pessoa = ''; //ninguém por enquanto
  let faltas = 0; //não sabemos ainda qual o maior número de faltas

  //      início       condição de parada      andamento
  for (let index = 0; index < relatorio.length; index++) {
    if (relatorio[index][1] > faltas){
       faltas = relatorio[index][1];
       pessoa = relatorio[index][0];
    }
  }
  console.log(pessoa);