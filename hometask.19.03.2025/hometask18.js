Array.prototype.myReverse=function() {
    let newArray=[];
    for (let i = array.length-1; i >=0; i--) {
        newArray.push(this[i]);
    }
    return newArray
}

let array=[1,2,3,4,5];
console.log(array.myReverse());