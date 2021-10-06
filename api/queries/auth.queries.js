module.exports = {
    registerUser: `INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`,
    findUser: `SELECT * FROM users WHERE email = $1`
}