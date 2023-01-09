// OOPs ?
// It is programming paradime. (Paradime- coding style)

// Why OOP?
// 1.  OOP is all about organising a code for its maximum reusability
//  with the help of OOP, the program contains objects to interact with the user, other object or other programs. 
// this makes program more efficient and easier to undersatand.

//This is a constructor function  or CLASS and we have to make its Object
function BankAccount(customerName, balance = 0) {
    //properties
    this.customerName = customerName;
    // it generates a time span of realy large number
    this.accountNumber = Date.now();
    this.balance = balance;

    // Methods
    this.deposit = function(amount) {
        this.balance += +amount;
    };

    this.withdraw = (amount) => {
        this.balance -= +amount;
    };
}

//Creating below type object will have seperate merory space in memory,
//making in one will not attect other.
// const ajayAccount = new BankAccount("Ajay", 1000);
// const johnAccount = new BankAccount("John Doe");

// console.log(ajayAccount);
// console.log(johnAccount);

// console.log("UPDATED");

// //accessing customer name
// console.log(ajayAccount.customerName);

// //manipulating balance
// ajayAccount.balance = 10000;

// //deposit method call
// ajayAccount.deposit(5000);

// ajayAccount.withdraw(1000);

// console.log(ajayAccount);


// johnAccount.deposit(2000);
// console.log(johnAccount);

// ======Dom Manipulation ==================

// An array to store created account numbers
const accounts = [];


const accountForm = document.querySelector("#accountForm");
const customerName = document.querySelector('#customerName')
const balance = document.querySelector('#balance');

const depositForm = document.querySelector('#depositForm');
const accountNumber = document.querySelector('#accountNumber');
const amount = document.querySelector('#amount');

const withdrawForm = document.querySelector('#withdrawForm');
const withdrawAccount = document.querySelector('#withdrawAccount');
const withdrawAmount = document.querySelector('#withdrawAmount');

accountForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const account = new BankAccount(customerName.value, +balance.value);
    accounts.push(account);
    console.log(accounts);
    console.log(customerName.value, balance.value);
});


depositForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const account = accounts.find(
        (account) => account.accountNumber === +accountNumber.value
    );
    account.deposit(+amount.value);
    console.log(accounts);
});


withdrawForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const account = accounts.find(
        (account) => account.accountNumber === +accountNumber.value
    );
    account.withdraw(+amount.value);
    console.log(accounts);
})