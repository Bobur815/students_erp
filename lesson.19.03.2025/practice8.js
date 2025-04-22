function filterPositiveNumbers(array) {
    let result=[];
    for (let element of array){
        if (element<0) {
            result.push(element)
        }
    }
    return result
}

console.log(filterPositiveNumbers([1,2,3,4,-5,-6,-7,-8,]));