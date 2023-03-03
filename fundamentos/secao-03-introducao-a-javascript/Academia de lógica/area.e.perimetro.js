// Exercício 1 - Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer.
// Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato:
// Fórmulas: 
//   perimetro = (2 * base) + (2 * altura) 
//   area = base * altura

let objeto = {
    area: 0,
    perimetro: 0,
  };
  
  function calculaAreaEPerimetro(base, altura) {
    const perimetro = (2 * base) + (2 * altura);
    const area = base * altura;
  
    return {
      area: area,
      perimetro: perimetro,
    }
  }
  
  const objetoRetornado = calculaAreaEPerimetro(4, 7);
  
  // console.log(calculaAreaEPerimetro(4, 7));
  // console.log(objeto);