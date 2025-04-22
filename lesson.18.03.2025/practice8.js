function compareObjects(object1,object2) {

    let keys1=Object.keys(object1)
    let keys2=Object.keys(object2)

    if (keys1.length!==keys2.length) {
        return false
    }

    for (let key of keys1){
            if (object1[key]!==object2[key]){
                return false
            }
        }
        return true
    }

let object1={a:1, b:2};
let object2={a:1, b:2};
console.log(compareObjects(object1,object2));

let object3={a: 1, b: 3};
console.log(compareObjects(object1,object2));