function doubleArray(arr) {
    result=[];

    arr.map(el=>{
        result.push(el*2);
    });
    return result
}

console.log(doubleArray([1,2,3,4,5,6]));