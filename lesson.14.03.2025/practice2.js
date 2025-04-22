function printKeys(student) {
    for (let key in student){
        console.log(key);
    }
}

let student = {
    name: "Alex",
    age: 19,
    city: "Los Angeles"
}

printKeys(student)