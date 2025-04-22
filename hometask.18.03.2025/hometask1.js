array=[1,1,2,1,1,1]
count=0;
for (let i = 0; i < array.length; i++) {
    let isUnique=true;
    for (let j = 0; j < i; j++) {
        if (array[i]===array[i]) {
            isUnique=false;
        }
    }
    if (isUnique) {
            count++;
        }
    
}
console.log(count);