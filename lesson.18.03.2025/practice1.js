let a = [1,2,3,4,5,6,7,8,9,10]
juft=0
for (let key of a){
    if (key%2==0){
        juft+=key
    }
}
console.log(juft);