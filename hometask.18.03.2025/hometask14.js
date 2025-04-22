function removeDuplicates(array,element) {
    qaytaKelganlar=[]
    for (let i = 0; i < array.length; i++) {
        if (!qaytaKelganlar.includes(array[i])) {
            qaytaKelganlar.push(array[i])
        }        
    }
    return qaytaKelganlar
}

console.log(removeDuplicates([1,1,2,3,4,5,5]));