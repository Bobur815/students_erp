function convertToWords(number) {
    const words = ["nol", "bir", "ikki", "uch", "to'rt", "besh", "olti", "yetti", "sakkiz", "to'qqiz"];

    if (number>=0 && number<=9) {
        return words[number];
    }
    else{
        return "Noto'g'ri son";
    }
}

console.log(convertToWords(1));
console.log(convertToWords(2));
console.log(convertToWords(3));
console.log(convertToWords(4));
console.log(convertToWords(5));
console.log(convertToWords(6));
console.log(convertToWords(10));
console.log(convertToWords(-6));