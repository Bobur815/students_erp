function getPersonInfo (object){
    let {name, age} = object;
    name === undefined ? name = 'Ali' : null;
    age == undefined ? age = 18 : null;
    return [name, age]
};
console.log(getPersonInfo({name: 'Sardor'}));