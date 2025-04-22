function between(array) {
    let min=Math.min(...array);
    let max=Math.max(...array);
    let newArr=[];

    for (let i=0; i<array.length; i++) {
        if (array[i]>min && array[i]<max) {
            newArr.push(array[i]);
        }
    }

    return newArr;
}

console.log(between([1, 5, 2, 8, 3]));