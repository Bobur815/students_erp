function getEven(numbers) {
    juftSonlar=[]
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i]%2==0) {
            juftSonlar.push(numbers[i])
        }       
    }
    return juftSonlar
}

console.log(getEven([1,2,3,4,5,6,7,8,9,10]));