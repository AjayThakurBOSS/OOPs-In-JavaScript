// function BankAccount(customerName, balance = 0) {
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;

// }

// BankAccount.prototype.deposit = function(amount) {
//     this.balance += +amount;
// };

// BankAccount.prototype.withdraw = function(amount) {
//     this.balance -= +amount;
// };

// // Current Account

// function CurrentAccount(customerName, balance = 0) {
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;
//     this.transactionLimit = 500000;
// }

// CurrentAccount.prototype.takeBusinessLoan = function(amount) {
//     console.log("Taking business loan of " + amount);
// }

// CurrentAccount.prototype.deposit = function(amount) {
//     this.balance += +amount;
// };

// CurrentAccount.prototype.withdraw = function(amount) {
//     this.balance -= +amount;
// };

// // Saving Account
// function SavingAccount(customerName, balance = 0) {
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;
//     this.transactionLimit = 100000;
// }

// SavingAccount.prototype.takePersonalLoan = function(amount) {
//     console.log("Taking personal loan of " + amount);
// }

// SavingAccount.prototype.deposit = function(amount) {
//     this.balance += +amount;
// };

// SavingAccount.prototype.withdraw = function(amount) {
//     this.balance -= +amount;
// };


// const ajaykAccount = new SavingAccount("Ajay", 5000);
// console.log(ajaykAccount);

//========== WITH INHERITANCE ===========

// function BankAccount(customerName, balance = 0) {
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;

// }

// // here you need to use normal function not arrow function
// BankAccount.prototype.deposit = function(amount) {
//     this.balance += +amount;
// };

// BankAccount.prototype.withdraw = function(amount) {
//     this.balance -= +amount;
// };

// // Saving Account
// function SavingAccount(customerName, balance = 0) {
//     //Constructor Linking
//     BankAccount.call(this, customerName, balance)
//     this.transactionLimit = 100000;
// }

// SavingAccount.prototype = Object.create(BankAccount.prototype);

// SavingAccount.prototype.takePersonalLoan = function(amount) {
//     console.log("Taking personal loan of " + amount);
// }

// const ajaykAccount = new SavingAccount("Ajay", 5000);
// console.log(ajaykAccount);

// ajaykAccount.deposit(500);
// console.log(ajaykAccount);

// ajaykAccount.withdraw(1000);
// console.log(ajaykAccount);

// // Current Account

// function CurrentAccount(customerName, balance = 0) {
//     //below code is called Constructor Linking
//     BankAccount.call(this, customerName, balance)
//     this.transactionLimit = 500000;
// }

// CurrentAccount.prototype = Object.create(BankAccount.prototype);

// CurrentAccount.prototype.takeBusinessLoan = function(amount) {
//     console.log("Taking business loan of " + amount);
// }

// const ajayktAccount = new CurrentAccount("Ajay", 5000);
// console.log(ajayktAccount);

// ajayktAccount.deposit(500);
// console.log(ajayktAccount);

// ajayktAccount.withdraw(500);
// console.log(ajayktAccount);


//==================== inheritance using Class ================

class BankAccounts {
    customername;
    accountNumber;
    balance = 0;

    constructor(customername, balance = 0) {
        this.customername = customername;
        this.accountNumber = Date.now();
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += +amount;
    }
    withdraw(amount) {
        this.balance -= +amount;
    }
}

class CurrentAccount extends BankAccounts {
    transuctionLimit = 500000;
    constructor(customername, balance = 0) {
        super(customername, balance)
    }
    takeBusinessLoan(amount) {
        console.log("Taking business loan of " + amount);
    }
}

class SavingAccount extends BankAccounts {
    transuctionLimit = 100000;
    constructor(customername, balance = 0) {
        super(customername, balance)
    }
    takePersonalLoan(amount) {
        console.log("Taking personal loan of " + amount);
    }
}


const ajaykAccount = new CurrentAccount("Ajay", 5000);
// console.log(ajaykAccount);
// 
ajaykAccount.deposit(500);
// console.log(ajaykAccount);
// 
ajaykAccount.withdraw(1000);
console.log(ajaykAccount);

ajaykAccount.takeBusinessLoan(50000);
console.log(ajaykAccount);