let player = {
    playerName: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    }
}
console.log('A jogadora ' + player.playerName + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');
player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];
console.log('A jogadora ' + player['playerName'] + ' ' + player['lastName'] + ' foi eleita a melhor do mundo por 6 vezes: ' + player['bestInTheWorld']);
console.log('A jogadora possui as seguintes medalhas: ouro: ' + player.medals.golden + ' e prata: ' + player.medals.silver);