module.exports = {
    createUserTable: `CREATE TABLE IF NOT EXISTS users (
        ID SERIAL PRIMARY KEY,
        name VARCHAR(50),
        email VARCHAR(50)
    )`,
    dropUserTable: `DROP TABLE users`,
    findAllUsers: `SELECT * FROM users`,
    findSpecificUser: `SELECT * FROM users WHERE id = $1`,
    showAllTables: `SELECT *
        FROM pg_catalog.pg_tables
        WHERE schemaname != 'pg_catalog' AND 
            schemaname != 'information_schema';
    `,
    createUser: `INSERT INTO users (
       name,
       email 
    ) VALUES (
        $1,
        $2
    )`
};
