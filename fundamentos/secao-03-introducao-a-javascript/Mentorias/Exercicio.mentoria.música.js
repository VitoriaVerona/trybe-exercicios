let musica = `
Mogli - Somente o necessário
         C    C7
Eu uso o necessário
  F           F7
Somente o necessário
  C        A7        D7   G7
O extraordinário é demais
        C    C7
Eu digo necessário
   F          F7
Somente o necessário
    C        A7     D7      G7      C   F   C
Por isso é que essa vida eu vivo em paz
`;

const acordes = [
  'C', 'C', 'F', 'F', 'C',
  'A', 'D', 'G', 'C', 'C',
  'F', 'F', 'C', 'A', 'D',
  'G', 'C', 'F', 'C'
];

function changeChord(chord) {
  const ordem = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  let posicao = ordem.indexOf(chord) + 1;
  return (ordem[posicao] || ordem[0]);
}

// Posto que a ordem das notas musicais Dó, Ré, Mi, Fá, Sol, Lá, Si
// são representadas respectivamente por C, D, E, F, G, A e B:
// 1 - Crie uma função que faça a transposição dos acordes de uma música para um tom acima.
// Essa função deve receber dois parâmetros, a música (string) e os acordes (array de strings).
// Exemplos de ação da função:
// - Onde estiver "C" no texto devemos trocar por "D"
// - Onde estiver "B" no texto devemos trocar por "C"

function transpor(music, chords) {
  for (let index = 0; index < chords.length; index++) {
    music = music.replace(chords[index], `[${index}]`);
  }
  for (let index = 0; index < chords.length; index++) {
    const novoAcorde = changeChord(chords[index]);
    music = music.replace(`[${index}]`, novoAcorde);
  }
  return music;
}

console.log(transpor(musica, acordes));