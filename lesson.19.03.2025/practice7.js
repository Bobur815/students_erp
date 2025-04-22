function increaseByTen(arr) {
    result=[];
    arr.map(el=>{
        result.push(el+10)
    });
    return result
}

console.log(increaseByTen([1,2,3,4,5,6]));