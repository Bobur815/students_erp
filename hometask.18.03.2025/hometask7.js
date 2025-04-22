function count(array, element) {
    let count=0
    for (let i = 0; i < array.length; i++) {
        if (array[i]===element) {
            count++;
        }
        
    }
    return count
}

console.log(count([1,2,3,2,4,5,2,5,2],2));