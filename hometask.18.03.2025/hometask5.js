function sum(numbers) {
    sum=0
    for (let number of numbers) {
        sum+=number
    }
    return sum
}

console.log(sum([1,2,3,4]));