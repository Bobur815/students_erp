let array=[12, 21, 33, 66, 88, 90]

let maxYigindi=array[0]+array[1];

for (let i = 1; i < array.length; i++) {
    let yigindi=array[i] + array[i+1]
    if (yigindi>maxYigindi) {
        maxYigindi=yigindi
    }
}

console.log(maxYigindi);