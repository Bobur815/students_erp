let a = [1,2,3,4,5,6,7,8,9,10]

maxArr=a[0]

for (let el of a){
    if (maxArr<el){
        maxArr=el
    }
}

console.log(maxArr);