let array=[42, 34, 19, 28, 8, 22, 13, 8, 39, 28, 20, 24];
minSonlar=[]

for (let i = 1; i < array.length-1; i++) {
        if (array[i]<array.length-1) {
            minSonlar.push(i)
        }
}

console.log(minSonlar);