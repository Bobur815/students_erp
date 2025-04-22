function chunk(array, size) {
    let newArr=[];
    let temp=[];

    for (let i=0; i<array.length; i++) {
        temp.push(array[i]);
        if (temp.length===size) {
            newArr.push(temp);
            temp=[];
        }
    }

    if (temp.length) {
        newArr.push(temp);
    }

    return newArr;
}

console.log(chunk([1, 2, 3, 4, 5, 6], 2)); 