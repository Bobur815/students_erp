function compressString(text) {
    let compressed="";
    let count=1
    if (text.length===0) return "";

    for (let i=0; i<text.length; i++) {
        if (text[i]===text[i+1]) {
            count++;
        }
        else{
            compressed+=text[i]+count;
            count=1
        }
    }
    return compressed
}

console.log(compressString("aabbccddeeffgg"));