const db = require('../db');
const queries = require('../queries/user.queries');

exports.createTable = async (req, res, next) => {
    db.query(queries.createUserTable, [], (err, result) => {
        if (err) {
            return next(err)
        };
        res.send(result)
    });
};

exports.findAllUsers = async (req, res, next) => {
    db.query(queries.findAllUsers, [], (err, result) => {
        if (err) {
            return next(err)
        };
        res.send(result)
    });
};

exports.showAllTables = async (req, res, next) => {
    db.query(queries.showAllTables, [], (err, result) => {
        if (err) {
            return next(err)
        };
        console.log(result)
        res.send(result)
    });
};
