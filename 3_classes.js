// class BankAccounts {
//     customername;
//     accountNumber;
//     balance = 0;

//     constructor(customername, balance = 0) {
//         this.customername = customername;
//         this.accountNumber = Date.now();
//         this.balance = balance;
//     }
//     deposit(amount) {
//         this.balance += +amount;
//     }
//     withdraw(amount) {
//         this.balance -= +amount;
//     }
// }

// const ajayAccount = new BankAccounts("ajay", 2000);

// ajayAccount.deposit(4000);
// console.log(ajayAccount);

// const johnAccount = new BankAccounts("john");
// johnAccount.deposit(2000);
// console.log(johnAccount);

// johnAccount.withdraw(1000);
// console.log(johnAccount);