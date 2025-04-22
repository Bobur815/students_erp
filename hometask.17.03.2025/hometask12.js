function longestWord(text) {
    let words=text.split(" ");
    let longest=""
    for (let word of words){
        if (word.length>longest.length) {
            longest=word
        }
    }
    return longest
}

console.log(longestWord("Bu yerda eng uzun so'zni toping!"));