function allStrings(array) {
    return array.every(element=>typeof element==="string");
}

console.log(allStrings(["hello", "world", "javascript"]));