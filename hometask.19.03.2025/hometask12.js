function hasNegative(array) {
    return array.some(element=>element<0);
}

console.log(hasNegative([1,2,3,4,5,-1]));