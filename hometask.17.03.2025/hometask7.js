function countOccurences(text,char) {
    char="m";
    count=0;
    for (let letter of text) {
        if (letter==char) {
            count++;
        }        
    }
    return count
}

console.log(countOccurences("Programming"));