Array.prototype.myShift=function(){
    let first=this[0];

    for (let i = 0; i < this.length-1; i++) {
        this[i]=this[i+1];
    }
    
    this.length=this.length-1;
    return first;
}

let arr=[1,2,3];
console.log(arr.myShift());
console.log(arr);