function isAnagram(text1, text2) {
    let sortedText1=text1.toLowerCase().split("").sort().join("");
    let sortedText2=text2.toLowerCase().split("").sort().join("");
    return sortedText1===sortedText2
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));