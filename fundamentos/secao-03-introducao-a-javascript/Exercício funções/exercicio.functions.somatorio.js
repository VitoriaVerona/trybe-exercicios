function somatorio(numero) {
    if (numero < 0) return 'ERRO';
  
    let total = 0;
    for (let index = 1; index <= numero; index += 1) {
      total += index;
    }
    return total;
  }
console.log(somatorio(5))
console.log(somatorio(1))
console.log(somatorio(-5))