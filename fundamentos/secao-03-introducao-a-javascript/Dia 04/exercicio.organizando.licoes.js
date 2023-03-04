let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  //Crie uma função para adicionar o turno da noite na lesson2. Essa função deve ter três parâmetros: o objeto a ser modificado, a chave a ser adicionada e o valor dela.

  function addNewKey(object, key, value) {
    object[key] = value;
  }
addNewKey(lesson2, 'turno', 'noite');
console.log(lesson2);

//Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
function listKeys(object) {
   return Object.keys(object);
}

console.log(listKeys(lesson1));
    
//Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.

function objectSize(object) {
    return Object.keys(object).length;
}
console.log(objectSize(lesson2));

//Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

function listOfValues(object) {
    return Object.values(object);
}
console.log(listOfValues(lesson3));

//Crie um objeto de nome allLessons, que deve agrupar todas as aulas por meio do Object.assign. Cada chave desse novo objeto será uma aula, portanto essas chaves serão nomeadas lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

let allLessons = Object.assign({}, { 
    lesson1: lesson1, 
    lesson2: lesson2, 
    lesson3: lesson3, 
  });
  // O método "Object.assign()" recebe dois parâmetros: um objeto e o que se quer atribuir à ele. Se no primeiro parâmetro for passado um objeto vazio, ele criará um objeto novo com as caraterísticas do segundo parâmetro.
  
  console.log(allLessons);

  //Crie uma função que retorne o número total de estudantes em todas as aulas.

  function numberOfStudents(object) {
    let total = 0;
    let keys = Object.keys(object);
    for(index in keys){
        total += object[keys[index]].numeroEstudantes;
    }  
    return total;
}
  console.log(numberOfStudents(allLessons));

  //Crie uma função que obtenha o valor da chave de acordo com sua posição no objeto.

  function verifyPair(object, key, value) {
    let entries = Object.entries(object);
    let isEqual = false;
    for (let index in entries) {
      if (entries[index][0] === key && entries[index][1] === value) isEqual = true;
    }
    return isEqual;
  }
  console.log(verifyPair(lesson2,'professor','Carlos'));
