function sortNumbers(array){
    let temp;

    for(index = 0; index < array.length; index +=1){
        for(let compare = index + 1; compare < array.length; compare +=1){
            if (array[index] > array[compare]){
                temp = array[index];
                array[index] = array[compare];
                array[compare] = temp;
            }
        }
    }
    return array;
    return array.sort(); /* De 0 a 9 */
    return array.sort((a, b) => a - b); /* Números maiores que 9 */
}

console.log(sortNumbers([3, 6, 7, 435, 1, 9, 2, 78,]));
