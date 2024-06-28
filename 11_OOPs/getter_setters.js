// Getter and Setter are by default available on all class\


class User{
    constructor(email, password) {
        this.email = email
        this.password = password
    }
    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }
    // automatically create getters and setter with properties
    get password() {
        return `${this._password}hitesh`;
    }
    // Not come only getters, it comes with setters
    set password(value) {
        this._password = value.toUpperCase();
    }
}
const Raj = new User("h@google.com", "abc");
console.log(Raj.password);
console.log(Raj.email);