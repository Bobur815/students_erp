function sumArray(array) {
    let result=0
    for (let element of array){
        result+=element
    }
    return result
}

console.log(sumArray([1,2,3,4]));