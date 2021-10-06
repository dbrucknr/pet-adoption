const db = require('../db');
const queries = require('../queries/conversation.queries');

exports.createTable = async (res, next) => {
    await db.query(queries.createConversationTable, [], (err, result) => {
        if (err) {
            return next(err)
        };
        res.send(result);
    });
};

exports.dropTable = async (res, next) => {
    await db.query(queries.dropConversationTable, [], (err, result) => {
        if (err) {
            return next(err)
        };
        res.send(result);
    });
};

exports.createConversation = async (members, res, next) => {
    await db.query(queries.createConversation, [members], (err, result) => {
        if (err) {
            return next(err)
        };
        res.send(result);
    });
};
