function indiceDoMaior(array) {
    let topNum = array[0]
    let topIndex = 0
    for (let num = 1; num < array.length; num += 1) {
        if (array[num] > topNum) {
            topNum = array[num];
            topIndex = num;
        }
    }
    return topIndex;
}
console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]))
console.log(indiceDoMaior([9, 1, 3, 5, 7]));