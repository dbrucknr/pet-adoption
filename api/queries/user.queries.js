module.exports = {
    createUserTable: `CREATE TABLE IF NOT EXISTS users (
        ID SERIAL PRIMARY KEY,
        name VARCHAR(50),
        email VARCHAR(50)
    )`
};
