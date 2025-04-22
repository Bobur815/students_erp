function squareElements(arr) {
    let result=[]

    arr.forEach(el => {
        result.push(el*el)
    });
    return result
}

console.log(squareElements([1,2,3,4,5,6]));