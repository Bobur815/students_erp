function reverse(numbers) {
    let teskari=[]
    for (let i = numbers.length-1; i >= 0; i--) {
        teskari.push(numbers[i])   
    }
    return teskari
}

console.log(reverse([1,2,3,4,5]));