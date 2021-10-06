const db = require('../db');
const queries = require('../queries/user.queries');

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

exports.updateUser = async (id, name, email, res, next) => {
    await db.query(queries.updateUser, [name, email, id], (err, result) => {
        if (err) {
            return next(err)
        };
        res.send(result.rows[0])
    });
};

exports.deleteUser =  async (id, res, next) => {
    await db.query(queries.deleteUser, [id], (err, result) => {
        if (err) {
            return next(err)
        };
        res.send(result)
    });
};

// TO BE MOVED TO ADMIN CONTROLLER
exports.showAllTables = async (res, next) => {
    await db.query(queries.showAllTables, [], (err, result) => {
        if (err) {
            return next(err)
        };
        console.log(result)
        res.send(result)
    });
};

exports.createTable = async (res, next) => {
    await db.query(queries.createUserTable, [], (err, result) => {
        if (err) {
            return next(err)
        };
        res.send(result);
    });
};

exports.dropTable = async (res, next) => {
    await db.query(queries.dropUserTable, [], (err, result) => {
        if (err) {
            return next(err)
        };
        res.send(result);
    });
}
