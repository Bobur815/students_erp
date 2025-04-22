let n = 10;
let juftSon=0
let toqSon=1
for (let i = 1; i <= n; i++) {
    if (i%2===0){
        juftSon+=i
    }
    else{
        toqSon*=1;
    }
}

console.log("Juft sonlar yig'indisi: ", toqSon);
console.log("Toq sonlar yig'indisi: ", toqSon);