function getFirstLast(array) {
    let obj={}
        obj.first=array[0];
        obj.last=array[array.length-1];
    
    return obj
}
console.log(getFirstLast([1,2,3,4]));