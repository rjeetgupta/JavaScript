class User{
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }
    addCourse() {
        console.log(`A new course is added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "Chai@gmail.com", "abc");
// console.log(chai.addCourse());
chai.addCourse()