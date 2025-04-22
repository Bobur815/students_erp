class Calculator {
    constructor() {
        this.a=5
        this.b=2
    }
    add(a=this.a,b=this.b){
        return a+b
    }
    substract(a=this.a,b=this.b){
        if (a>b) {
            return a-b
        }
        else{
            console.log("A son B sondan kichik. Shu sababdan A sondan B sonni ayirishni iloji yo'q");
        }
    }
    
    multiply(a=this.a,b=this.b){
        return a*b
    }

    divide(a=this.a,b=this.b){
        if (b===0) {
            return "0 ga bo'lish mumkin emas"
        }

        else if (a>b) {
            return a/b
        }
        else{
            return "A son B sondan kichik. Bo'lish mumkin emas"        
        }
    }    
}

const calc=new Calculator()
console.log("Add: ", calc.add())
console.log("Multiply: ", calc.multiply())
console.log("Divide: ", calc.divide())
calc.divide("Substract: ", calc.substract())