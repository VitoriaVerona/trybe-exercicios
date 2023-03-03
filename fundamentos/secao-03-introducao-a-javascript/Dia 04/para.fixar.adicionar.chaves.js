let student = {
    firstName: 'Vitória',
}

let newKey = 'age';
let age = 27;

function addNewProperty(object, key, value) {
    object[key] = value;
};

addNewProperty(student, newKey, age);

newKey = 'email';
let email = 'vitoriaverona2@gmail.com';
addNewProperty(student, newKey, email);

newKey = 'telefone';
let telefone = '(92)982550660';
addNewProperty(student, newKey, email);

newKey = 'GitHub';
let GitHub = 'VitoriaVerona';
addNewProperty(student, newKey, GitHub);

newKey = 'linkedin';
let linkedin = '/vitoriaverona';
addNewProperty(student, newKey, linkedin);

console.log(student);