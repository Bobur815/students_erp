function removeAt(array, index) {
    let newArr=[];

    for (let i=0; i<array.length; i++) {
        if (i!==index) {
            newArr.push(array[i]);
        }
    }

    return newArr;
}

console.log(removeAt([1, 2, 3, 4], 2));