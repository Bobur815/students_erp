text='ibrgmv018'
count=0

for (let index of text){
    if ("01234567890".includes(index)){
        count+=1
    }
}

console.log(count);