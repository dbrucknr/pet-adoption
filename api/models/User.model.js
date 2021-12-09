class User {
  constructor(name, email) {
    if (!this.validEmail(email)) {
      return "Invalid Email";
    }

    if (!this.validName) {
      return "Invalid Name";
    }
    (this.email = email), (this.name = name);
  }

  validEmail(entry) {
    console.log("user model - validating email", entry);
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(entry);
  }

  validName(entry) {
    return entry.length > 0;
  }

  get values() {}
}

module.exports = User;

// const User = entry => {
//     const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(entry);
//     const validateName = entry.length > 0;

// }
