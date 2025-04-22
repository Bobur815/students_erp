function max(numbers) {
    maxSon=numbers[0]
    for (let number of numbers) {
        if (number>maxSon) {
            maxSon=number
        }
    }
    return maxSon
}

console.log(max([1,2,3,4,5]));