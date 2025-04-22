function formatString(text) {
    result=" "
    numbers="1234567890"
    for (let letter of text){
            if (letter!==" " && !numbers.includes(letter)) {
                result+=letter;
            }
    }
    return result
}

console.log(formatString("Hi, there! 123"));