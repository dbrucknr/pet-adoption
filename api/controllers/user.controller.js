const db = require('../db');
const queries = require('../queries/user.queries');

exports.createTable = async (res, next) => {
    await db.query(queries.createUserTable, [], (err, result) => {
        if (err) {
            return next(err)
        };
        res.send(result)
    });
};

exports.findAllUsers = async (res, next) => {
    await db.query(queries.findAllUsers, [], (err, result) => {
        if (err) {
            return next(err)
        };
        const { rowCount, rows } = result;
        rowCount > 0 ? res.send(rows) : res.send([])
    });
};

exports.findSpecificUser = async (id, res, next) => {
    await db.query(queries.findSpecificUser, [id], (err, result) => {
        if (err) {
            return next(err)
        };
        res.send(result)
    });
};

exports.createUser = async (name, email, res, next) => {
    db.query(queries.createUser, [name, email], (err, result) => {
        if (err) {
            return next(err)
        };
        res.send(result)
    });
};

exports.showAllTables = async (res, next) => {
    await db.query(queries.showAllTables, [], (err, result) => {
        if (err) {
            return next(err)
        };
        console.log(result)
        res.send(result)
    });
};
