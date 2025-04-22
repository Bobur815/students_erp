class Book {
    constructor(nomi,muallifi,narxi) {
        this.nomi="O'lik jonlar"
        this.muallifi="Gogol"
        this.narxi=200
    }
    getInfo(){
        return `Kitob nomi: ${this.nomi}\n Kitob muallifi: ${this.muallifi}\n Kitob narxi: ${this.narxi}\n`
    }

    setPrice(yangiNarx){
        return `Yangi narx qo'yildi va yangi narx: ${narx}=${yangiNarx}`
    }

    applyDiscount(percent){
        return `CHegirma qo'yildi: ${this.narxi-percent}`
    }
}

const book=new Book()
console.log(book.getInfo())
console.log(book.applyDiscount(10))