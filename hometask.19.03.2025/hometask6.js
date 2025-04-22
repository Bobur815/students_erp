function filterByLength(array) {
    return array.filter(word=>word.length>5);   
}

console.log(filterByLength(["apple", "kiwi", "banana", "pear"]));