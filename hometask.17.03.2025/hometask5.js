function countVowels(text) {
    let vowels="aeiouAEIOU";
    let count=0;

    for (let j = 0; j<text.length; j++) {
        if (vowels.includes(text[j])) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("Abdurahmon Ibroximov"));