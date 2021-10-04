const { Pool } = require('pg');
const client = new Pool({
    HOST: process.env.HOST,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DB,
    dialect: process.env.dialect,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const connect = async () => await client.connect();
// const execute = async (query) => {
//     try {
//         await client.connect();
//         await client.query(query);
//         return true;
//     } catch (error) {
//         console.error(error.stack);
//         return false;
//     };
// }

module.exports = { connect }
