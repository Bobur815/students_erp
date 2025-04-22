function countOccurences(array) {
    return array.reduce((acc, word)=>{
        acc[word]=(acc[word] || 0)+1;
        return acc;
    }, {});
}

console.log(countOccurences(["apple", "banana", "apple", "orange", "banana", "apple"]));