function filterPrimeNumbers(array) {
    let result=[];

    for (let element of array) {
        if (isPrime(element)) {
            result.push(element);
        }
    }
    return result;
}

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) { 
        if (num % i === 0) return false; 
    }
    return true;
}

console.log(filterPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));