function reverseNumbers(array) {
    return array.map(num=>{
        let str=num.toString();
        let reversedString="";

        for (let i = str.length-1; i>=0; i--) {
            reversedString+=str[i];
        }

        return Number(reversedString)
    });
}

console.log(reverseNumbers([123, 456, 789]));
