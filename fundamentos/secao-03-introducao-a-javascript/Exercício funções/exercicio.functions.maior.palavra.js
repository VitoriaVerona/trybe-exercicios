function maiorPalavra(arrayOfNames) {
  let biggestName = arrayOfNames[0];
  for (let name = 1; name < arrayOfNames.length; name += 1) {
      if (arrayOfNames[name].length > biggestName.length) {
          biggestName = arrayOfNames[name];
      }
  }
  return biggestName;
}
console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))
console.log(maiorPalavra(['JavaScript', 'HTML', 'CSS', 'GitHub', 'Unix']))