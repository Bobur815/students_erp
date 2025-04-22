function capitalizeWords(array) {
    let result=[]
    for (let element of array) {
        result.push(element[0].toUpperCase()+element.slice(1));
    }
    return result
}

console.log(capitalizeWords(["hello", "world"]));