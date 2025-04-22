class BankAccount {
    #balance;
    #transactions;
    constructor(owner, initialBalance) {
        if (typeof owner!=="string" || typeof initialBalance!=="number" || initialBalance<0) {
            throw new Error("Invalid account details");
        }
        this.owner=owner;
        this.#balance=initialBalance;
        this.#transactions=[];
    }
    deposit(amount) {
        if (amount<=0) {
            throw new Error("Deposit amount must be positive");
        }
        this.#balance+=amount;
        this.#transactions.push({ type: "Deposit", amount });
    }
    withdraw(amount) {
        if (amount<=0) {
            throw new Error("Withdrawal amount must be positive");
        }
        if (amount>this.#balance) {
            throw new Error("Insufficient funds");
        }
        this.#balance-=amount;
        this.#transactions.push({ type: "Withdrawal", amount });
    }
    transfer(amount, recipientAccount) {
        if (!(recipientAccount instanceof BankAccount)) {
            throw new Error("Invalid recipient account");
        }
        this.withdraw(amount);
        recipientAccount.deposit(amount);
        this.#transactions.push({ type: "Transfer", amount, to: recipientAccount.owner });
    }
    getBalance() {
        return this.#balance;
    }
    getTransactionHistory() {
        return this.#transactions;
    }
}

let account1=new BankAccount("Ali", 1000);
let account2=new BankAccount("Vali", 500);
account1.deposit(500);
account1.withdraw(200);
console.log(account1.getBalance());
account1.transfer(300, account2);
console.log(account1.getBalance());
console.log(account2.getBalance());
console.log(account1.getTransactionHistory());
console.log(account2.getTransactionHistory());