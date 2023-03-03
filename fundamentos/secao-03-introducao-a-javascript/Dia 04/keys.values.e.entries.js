let dog = {
    firstName: 'Zyra',
    age: '2',
    size: 'medium',
}

//Array com as chaves
let keys = Object.keys(dog);
console.log(keys);

//Array com os valores
let values = Object.values(dog);
console.log(values);

//Array com as entradas
let entries = Object.entries(dog);
for(index in entries){
console.log(entries[index][0]);
console.log(entries[index][1]);
console.log(entries[0][1]);
}