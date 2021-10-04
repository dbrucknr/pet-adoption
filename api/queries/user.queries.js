module.exports = {
    createUserTable: `CREATE TABLE IF NOT EXISTS users (
        ID SERIAL PRIMARY KEY,
        name VARCHAR(50),
        email VARCHAR(50)
    )`,
    findAllUsers: `SELECT * FROM users`,
    showAllTables: `SELECT *
        FROM pg_catalog.pg_tables
        WHERE schemaname != 'pg_catalog' AND 
            schemaname != 'information_schema';
    `
};
