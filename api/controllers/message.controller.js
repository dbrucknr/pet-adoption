const db = require('../db');
const queries = require('../queries/message.queries');
const issueSQL = require('./utils');

exports.createTable = async (res, next) => 
    issueSQL(queries.createMessageTable, res, next, []);

exports.dropTable = async (res, next) => 
    issueSQL(queries.dropMessageTable, res, next, []);

exports.createMessage = async (conversation_id, sender_id, message, res, next) => 
    issueSQL(queries.createMessage, res, next, [conversation_id, sender_id, message]);

exports.findConversationMessages = async (id, res, next) => 
    issueSQL(queries.findConversationMessages, res, next, [id]);

exports.deleteMessage = async (id, res, next) => 
    issueSQL(queries.deleteMessage, res, next, [id]);

exports.updateMessage = async (id, message, res, next) => 
    issueSQL(queries.updateMessage, res, next, [id, message]);

exports.getAllMessages = async (res, next) => 
    issueSQL(queries.selectAllMessages, res, next, []);

exports.findMessage = async (id, res, next) => 
    issueSQL(queries.findSpecificMessage, res, next, [id]);
