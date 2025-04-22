function insertAt(array, index, element) {
    let newArr=[]
    for (let i = 0; i < array.length; i++) {
        if (i===index) {
            newArr.push(element)
        }       
        newArr.push(array[i])
    }
    if (index>=array.length) {
        newArr.push(element)
    }
    return newArr
}

console.log(insertAt([0,2,3], 1, 1));