function compress(string) {
    let result=""
    let count=1

    for (let i = 0; i < string.length; i++) {
        if (string[i]===string[i+1]) {
            count++
        }
        else{
            result+=string[i]+count
            count=1
        }
    }
}