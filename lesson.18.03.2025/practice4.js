let arr = [1,1,3,3,5,5,7,8,9,10];
repeatlyAdded=0;
let elementCount={};

for (let el of arr){
    if (elementCount[el]){
        elementCount[el]++;
    }
    else{
        elementCount[el]=1
    }
}

for (let count in elementCount){
    if (elementCount[count]>1) {
        repeatlyAdded++;
    }
}

console.log(repeatlyAdded);