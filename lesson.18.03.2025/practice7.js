function findDivisible(arr,n) {
    return arr.filter(num=>num%n===0);
}

console.log(findDivisible([10,15,20,25,30],5));
