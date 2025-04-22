Array.prototype.myShift=function(){
    if (Array.length===0) {
        return undefined
    }

    let first=this[0]
    for (let i = 0; i < array.length-1; i++) {
        this[i]=this[i+1];        
    }
    this.length=this.length-1
    return first
}
array=[1,2,3,4,5,6]
console.log(array.myShift());
console.log(array);