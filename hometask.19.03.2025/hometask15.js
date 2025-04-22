Array.prototype.myPop=function(){
    let last=this[this.length-1];
    this.length=this.length-1;
    return last;
};

let arr=[1,2,3];
console.log(arr.myPop());
console.log(arr);