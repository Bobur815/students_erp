function multiplyByTwo(array) {
    let result=[];

    array.forEach(element => {
        result.push(element*2);
    });
    return result
}

console.log(multiplyByTwo([1,2,3,4,5,6]));