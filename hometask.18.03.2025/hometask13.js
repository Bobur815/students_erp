function swap(array) {
    for (let element in array) {
        if (element==0) {
            let temp=array[0]
            array[0]=array[array.length-1]
            array[array.length-1]=temp
        }
    }
    return array
}

console.log(swap([1,2,3,4,5]));