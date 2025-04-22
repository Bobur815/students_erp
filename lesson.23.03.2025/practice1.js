function checkType(obj) {
    let newObj=new Object()
    return obj instanceof Object
}

console.log(checkType({}));