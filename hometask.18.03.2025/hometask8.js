function search(array, element) {
    for (let element = 0; element < array.length; element++) {
        if (array.includes(2)) {
            return true
        }
        else{
            return false
        }
    }
}

console.log(search([1,2,3,4]));