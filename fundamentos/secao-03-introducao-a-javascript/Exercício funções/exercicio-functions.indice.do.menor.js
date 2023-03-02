function indiceDoMenor(array) {
    let lowNum = array[0]
    let lowIndex = 0
    for (let num = 1; num < array.length; num += 1) {
        if (array[num] < lowNum) {
            lowNum = array[num];
            lowIndex = num;
        }
    }
    return lowIndex;
}
console.log(indiceDoMenor([2, 3, 6, 7, 10, 1]))
console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3]))