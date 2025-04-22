let arr=[1,2,3,4]
maxEl=arr[0]
minEl=arr[0]
for (let el of arr){
    if (maxEl<el) {
        maxEl=el
        
    }
}

for (let el of arr){
    if (minEl>el){
        minEl=el
    }
}