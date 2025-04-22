function filterGreaterThanFive(array) {
    let result=[];
    for(let element of array){
        if (element>5) {
            result.push(element)
        }
    }
    return result
}

console.log(filterGreaterThanFive([1,2,3,4,5,6,7,8,9,10]));