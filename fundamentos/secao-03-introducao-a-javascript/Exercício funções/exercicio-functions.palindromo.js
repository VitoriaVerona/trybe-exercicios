function verificaPalindromo(word) {
  let given = word.toLowerCase();
  let inverted = "";
  for (let letter = given.length - 1; letter >= 0; letter -= 1) {
      inverted += given[letter];
  }
  return given === inverted;
}
console.log(verificaPalindromo("arara"));
console.log(verificaPalindromo("desenvolvimento"));