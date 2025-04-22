function sumOddIndex(array){
    result=0
    array.forEach((num, index) => {
        if (index%2!==0) {
            result+=num;
        }
    });
    return result
}

console.log(sumOddIndex([1,2,3,4,5,6,7]));