function getSize(array) {
    count=0;
    for (let element of array) {
        count++;
    }
    return count
}

console.log(getSize([1,2,3,4,5]));