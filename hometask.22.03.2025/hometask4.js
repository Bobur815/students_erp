class Temperature {
    constructor(celsius) {
        this.celsius=celsius;
    }

    toFaranheit() {
        return this.celsius*9/5+32;
    }

    toKelvin() {
        return this.celsius+273.15;
    }

    setCelsius(yangiCelsius) {
        this.celsius=yangiCelsius;
    }
}

const temp=new Temperature(25);
console.log(temp.toFaranheit());
console.log(temp.toKelvin());
console.log(temp.toFaranheit());
console.log(temp.toKelvin());