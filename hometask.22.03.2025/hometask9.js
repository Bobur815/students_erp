class EmailValidator {
    constructor(email) {
        this.email=email;
    }
    isValid() {
        const regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(this.email);
    }
    getDomain() {
        return this.isValid() ? this.email.split("@")[1] : null;
    }
    getUsername() {
        return this.isValid() ? this.email.split("@")[0] : null;
    }
}

let validator=new EmailValidator("test@example.com");
console.log(validator.isValid());
console.log(validator.getDomain());
console.log(validator.getUsername());
const invalidValidator=new EmailValidator("invalid-email");
console.log(invalidValidator.isValid());
console.log(invalidValidator.getDomain());
console.log(invalidValidator.getUsername());
