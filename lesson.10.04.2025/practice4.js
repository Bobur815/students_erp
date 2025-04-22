class BankAccount {
    constructor(accountNumber,balance) {
        this.accountNumber=31558
        this.balance=300
    }
    deposit(amount, balance=this.balance){
        return `Hisobingizga ${amount}$ ga to'ldirildi. Hozirgi paytdagi hisobingiz: ${balance+amount}$\n `
    }

    withdraw(amount,balance=this.balance){
        if (balance>amount) {
            return `Hisobingizdan ${amount}$ olindi. Hozirgi paytdagi hisobingiz: ${balance-amount}$\n `
        }
    }

    getBalance(){
        return `Sizning hisobingiz: ${this.balance}$\n`
    }
}

const account = new BankAccount()
console.log(account.getBalance());
console.log(account.deposit(500))
console.log(account.withdraw(200))