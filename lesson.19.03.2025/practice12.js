function multiplyArray(array) {
    let result=1
    for (let element of array){
        result*=element
    }
    return result
}

console.log(multiplyArray([1,2,3,4]));