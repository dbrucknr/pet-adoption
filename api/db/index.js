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

module.exports = {
    async query (text, params, callback) {
        const start = Date.now()
        return client.query(text, params, (err, res) => {
          const duration = Date.now() - start
          console.log('executed query', { text, duration, rows: res.rowCount })
          callback(err, res)
        })
    },
    async getClient (callback) {
        client.connect((err, client, done) => {
          callback(err, client, done)
        })
    }   
}