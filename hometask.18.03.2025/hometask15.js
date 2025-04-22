function intersection(arr1,arr2) {
    newArr=[]
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j< arr2.length; j++) {
            if (arr1[i]===arr2[j]) {
                newArr.push(arr1[i])
            }
        }        
    }
    return newArr
}

console.log(intersection([1,2,3,4],[3,4,5,6]));