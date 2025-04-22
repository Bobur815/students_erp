function wordFrequency(string) {
    obj={}
    let words=string.toLowerCase().replace(/[^a-z0-9\s]/g, "").split(" ");
    for (let word of words) {
        if (word) {
            obj[word]=(obj[word] || 0) + 1;
        }
    }
    return obj
}

console.log(wordFrequency("hi, there! hi, there!"));