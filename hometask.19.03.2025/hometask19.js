String.prototype.myLength=function(){
    let count=0;
    for (let letter of string) {
        count++;
    }
    return count
}

let string="Hello";
console.log(string.myLength());