//Para fixar melhor o conteúdo abordado, observe, a seguir, mais um exemplo em que foram implementadas, de modos diferentes, duas funções que retornam a mesma lista de valores. Perceba como fica muito mais fácil obter os valores de um objeto com o uso do Object.values.

let student = {
  html: 'Muito Bom',
  css: 'Bom',
  javascript: 'Ótimo',
  softskill: 'Ótimo',
};

function listSkillsValuesWithFor(student) {
  let skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};




function listSkillsValuesWithValues(student) {
  return Object.values(student);
}

// Sem Object.values
console.log(listSkillsValuesWithFor(student));

// Com Object.values
console.log(listSkillsValuesWithValues(student));