function difference(arr1, arr2) {
    let newArr=[];
    for (let i=0; i<arr1.length; i++) {
        let mavjud=false;
        for (let j=0; j<arr2.length; j++) {
            if (arr1[i]===arr2[j]) {
                mavjud=true;
                break;
            }
        }

        if (!mavjud) { 
            newArr.push(arr1[i]);
        }
    }

    return newArr;
}

console.log(difference([1, 2, 3, 4, 5], [2, 4]));
