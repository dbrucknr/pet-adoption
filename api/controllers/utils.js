const db = require('../db');

const issueSQL = async (sql, res, next, params) => {
    await db.query(sql, params, (error, result) => {
        if (error) {
            return next(error)
        };
        res.send(result.rows);
    });
}

module.exports = issueSQL
