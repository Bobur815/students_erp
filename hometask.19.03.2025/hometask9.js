function allUnique(array) {
    return array.every((num, index)=>{
        if (array.indexOf(num)!==index) {
            return false;
        }
        return true
    });
}

console.log(allUnique([1,2,3,4,5,6]));
