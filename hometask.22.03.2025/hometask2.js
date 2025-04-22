class Calculator {
    constructor() {
        this.result=0;
    }
    add(n) {
        this.result+=n;
    }
    substract(n) {
        this.result-=n;
    }

    multiply(n) {
        this.result*=n;
    }
    divide(n) {
        if (n!==0) {
            this.result/=n;
        } else {
            console.log("Nolga bo'lish mumkin emas!");
        }
    }
    getResult(){
        return this.result;
    }

    clear(){
        this.result=0;
    }
}

let calculator=new Calculator();
calculator.add(10);
calculator.substract(3);
calculator.multiply(2);
calculator.divide(2);
console.log(calculator.getResult());
calculator.clear();
console.log(calculator.getResult());