function maisRepetido(array) {
    let repetitions = [];
    for (const key in array) {
        repetitions.push(1);
    }
    for (let currentValue = 0; currentValue < array.length; currentValue += 1) {
        for (let comparedValue = 0; comparedValue < array.length; comparedValue += 1) {
            if (currentValue != comparedValue) {
                if (array[currentValue] == array[comparedValue]) {
                    repetitions[comparedValue] += 1;
                }
            }
        }
    }
    function highest(array) {
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
    let mostRepeatedPos = highest(repetitions);
    return array[mostRepeatedPos];
}
console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]))
console.log(maisRepetido([2, 3, -2, 3, -2, 2, 3]))