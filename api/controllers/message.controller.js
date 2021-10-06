const db = require('../db');
const queries = require('../queries/message.queries');

exports.createTable = async (res, next) => {
    await db.query(queries.createMessageTable, [], (err, result) => {
        if (err) {
            return next(err)
        };
        res.send(result);
    }); 
};

exports.dropTable = async (res, next) => {
    await db.query(queries.dropMessageTable, [], (err, result) => {
        if (err) {
            return next(err)
        };
        res.send(result);
    });
};