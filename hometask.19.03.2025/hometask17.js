Array.prototype.mySplit=function(){
    let str=this.toString();
    let result=[]
    for (let i=0; i<str.length; i++) {
        result.push(str[i])
    }
    return result
}

let array=[1,2,3,4,5];
console.log(array.mySplit());