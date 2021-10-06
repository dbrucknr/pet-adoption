module.exports = {
    createUserTable: `CREATE TABLE IF NOT EXISTS users (
        ID SERIAL PRIMARY KEY,
        name VARCHAR(50),
        email VARCHAR(50),
        password VARCHAR(50)
    )`,
    showAllTables: `SELECT *
        FROM pg_catalog.pg_tables
        WHERE schemaname != 'pg_catalog' AND 
            schemaname != 'information_schema';
    `,
    dropUserTable: `DROP TABLE users`,
    findAllUsers: `SELECT * FROM users`,
    findSpecificUser: `SELECT * FROM users WHERE id = $1`,
    updateUser: `UPDATE users SET name = ($3), email = ($1) WHERE id = ($2)`,
    deleteUser: `DELETE FROM users WHERE id = $1`,
};
