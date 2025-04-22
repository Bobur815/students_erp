class PasswordGenerator {
    constructor(length) {
        this.length=length;
        this.useSymbols=false;
    }
    setLength(newLength) {
        this.length=newLength;
    }
    includeSymbols(value) {
        this.useSymbols=value;
    }
    generate() {
        let letters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let numbers="0123456789";
        let symbols="!@#$%^&*()_+-=[]{}|;:,.<>?";
        let characters=letters+numbers;
        if (this.useSymbols) {
            characters+=symbols;
        }

        let password="";
        for (let i=0; i<this.length; i++) {
            let randomIndex=Math.floor(Math.random()*characters.length);
            password+=characters[randomIndex];
        }

        return password;
    }
}

let generator=new PasswordGenerator(8);
generator.includeSymbols(true);
console.log(generator.generate());
generator.setLength(12);
console.log(generator.generate());