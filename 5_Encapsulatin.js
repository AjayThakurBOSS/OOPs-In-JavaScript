 class BankAccounts {
     customername;
     accountNumber;
     balance;

     constructor(customername, balance = 0) {
         this.customername = customername;
         this.accountNumber = Date.now();
         this.#balance = balance;
     }
     deposit(amount) {
         this.#balance += +amount;
     }
     withdraw(amount) {
         this.#balance -= +amount;
     }

     set Balance(amount) {
         if (isNaN(amount)) {
             throw new Error('Amount is not a valid  input.');
         }
         this.#balance = +amount;

     }

     get Balance() {
         return this.#balance;
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
 const ajayAccount = new CurrentAccount('ajay', 2000);
 //  ajayAccount.#balance = setBalance(4000);
 console.log(ajayAccount);