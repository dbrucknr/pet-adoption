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

exports.createMessage = async (conversation_id, sender_id, message, res, next) => {
    await db.query(queries.createMessage, [conversation_id, sender_id, message], (err, result) => {
        if (err) {
            return next(err)
        };
        res.send(result); 
    })
};

exports.findConversationMessages = async (id, res, next) => {
    await db.query(queries.findConversationMessages, [id], (err, result) => {
        if (err) {
            return next(err)
        };
        res.send(result.rows);   
    });
};

exports.deleteMessage = async (id, res, next) => {
    await db.query(queries.deleteMessage, [id], (err, result) => {
        if (err) {
            return next(err)
        };
        res.send(result);    
    });
};

exports.updateMessage = async (id, res, next) => {
    await db.query(queries.updateMessage, [id], (err, result) => {
        if (err) {
            return next(err)
        };
        res.send(result);    
    });
};

exports.getAllMessages = async (res, next) => {
    await db.query(queries.selectAllMessages, [], (err, result) => {
        if (err) {
            return next(err)
        };
        res.send(result);  
    });
};

exports.findMessage = async (id, res, next) => {
    await db.query(queries.findSpecificMessage, [id], (err, result) => {
        if (err) {
            return next(err)
        };
        res.send(result);  
    });
};