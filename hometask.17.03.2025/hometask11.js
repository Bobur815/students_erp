function removeDuplicates(text) {
    result=" "
    let seen=new Set();

    for (let char of text){
        if (!seen.has(char)) {
            result+=char;
            seen.add(char);
        }
    }
    return result
}

console.log(removeDuplicates("Hello"));