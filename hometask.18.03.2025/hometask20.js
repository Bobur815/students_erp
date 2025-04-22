function rotate(array, k) {
    let newArr = [...array];
    for (let i=0; i<k; i++) {
        let last=newArr.pop();
        newArr.unshift(last);
    }

    return newArr;
}

console.log(rotate([1, 2, 3, 4, 5], 2)); 