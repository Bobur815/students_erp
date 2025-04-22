function containsVowel(array) {
    return array.some (word=>/[aeiouAEIOU]/.test(word));
}

console.log(containsVowel(["sky", "dry", "try"]));