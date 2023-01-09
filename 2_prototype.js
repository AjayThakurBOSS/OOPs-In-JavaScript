 //This is a constructor function  or CLASS and we have to make its Object
function BankAccount(customerName, balance = 0) {
    //properties
    this.customerName = customerName;
    // it generates a time span of realy large number
    this.accountNumber = Date.now();
    this.balance = balance;

    // Methods
    // this.deposit = function(amount) {
    //     this.balance += +amount;
    // };

    // this.withdraw = (amount) => {
    //     this.balance -= amount;
    // };
}

BankAccount.prototype.deposit = function(amount) {
    this.balance += +amount;
}

BankAccount.prototype.withdraw = function(amount) {
    this.balance -= +amount;
}

// const ajayAccount = new BankAccount("ajay");
// console.log(ajayAccount);

// const johnAccount = new BankAccount("john", 1000)
// console.log(johnAccount);

// console.log(BankAccount.prototype);