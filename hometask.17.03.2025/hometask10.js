function sumDigits(text) {
    result=0

    for (let char of text){
        if (!isNaN(char)&&char!==" ") {
                result+=Number(char)
            }
        }
    return result
}

console.log(sumDigits("hello, 1234"));