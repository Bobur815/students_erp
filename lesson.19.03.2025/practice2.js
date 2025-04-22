Array.prototype.myUnshift = function(...elements) {
    for (let i = this.length - 1; i >= 0; i--) {
        this[i + elements.length] = this[i];
    }

    for (let i = 0; i < elements.length; i++) {
        this[i] = elements[i];
    }

    return this.length;
};

let arr = [3, 4, 5];
let result = arr.myUnshift2(12, 13);
console.log(arr);
console.log(result);