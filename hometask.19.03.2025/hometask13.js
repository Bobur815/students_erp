function MyLength(array) {
    this.count=0;
    for (let element of array) {
        this.count++;
    }
}

MyLength.prototype.getLength=function(){
    return this.count;  
}

let myArray=new MyLength ([1,2,3,4,5,6]);
console.log(myArray.getLength());