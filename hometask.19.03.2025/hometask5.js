function uniqueValues(array) {
    return array.filter(num=>array.indexOf(num)===array.lastIndexOf(num))
}

console.log(uniqueValues([1,1, 2, 3, 4, 5, 6, 6]));