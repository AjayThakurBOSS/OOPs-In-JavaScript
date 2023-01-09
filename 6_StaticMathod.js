// class Config {
//     static dbUser = 'username';
//     static dbPassword = ' secret';
//     static apiToken = 'abcd';
// }

// console.log(Config.apiToken);

/* Our requirement is as soon as a user is created, one id will be assigned to it and id will be in increasing order.x */

//Utility function


class User {

    // Static properties
    static id = 1;
    static cache = {
        1: 'some value',
    };

    constructor(name, age, income) {
            this.name = name;
            this.age = age;
            this.income = income;
            this.id = User.id++;
        }
        // Static Properties

    //here point is you can access static properties by static methods by using "this".
    static checkCache() {
        console.log(this.cache)
    }

    static hasinCache() {
        this.checkCache();
    }

    // NOTE: you can not access static properties by normal methods like below
    // hasinCache() {
    //     this.checkCache();
    // }

    // idea is, we have to assign a unique is to the every new user created



    //Static method

    // static compairByAge(user1, user2) {
    //     return user1.age - user2.age;
    // }

    // static compairByIncome(user1, user2) {
    //     return user1.income - user2.income;
    // }


    //STATIC BLOCK

    // static {
    //     console.log('Initialized');
    // }

    static hasinCache() {
        console.log(User.cache);
    }

}

const user1 = new User("Ajay", 30, 8000000);
const user2 = new User("Thakur", 20, 50000);
const user3 = new User("baba", 55, 5000);
const user4 = new User("baba", 55, 5000);
const user5 = new User("baba", 55, 5000);
//shorting age wise

const users = [user1, user2, user3, user4, user5];
// users.sort((a, b) => a.age - b.age);

// users.sort(User.compairByAge);
// console.log(users);

// users.sort(User.compairByIncome);
// console.log(users);

//calling static properties
// User.hasinCache();

//static block
// User.hasinCache();

