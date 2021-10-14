const _ = require('../db/message.queries');
const issueSQL = require('./utils');

exports.createTable = async (res, next) => 
    issueSQL(_.createMessageTable, res, next, []);

exports.dropTable = async (res, next) => 
    issueSQL(_.dropMessageTable, res, next, []);

exports.createMessage = async (conversation_id, sender_id, message, res, next) => 
    issueSQL(_.createMessage, res, next, [conversation_id, sender_id, message]);

exports.findConversationMessages = async (id, res, next) => 
    issueSQL(_.findConversationMessages, res, next, [id]);

exports.deleteMessage = async (id, res, next) => 
    issueSQL(_.deleteMessage, res, next, [id]);

exports.updateMessage = async (id, message, res, next) => 
    issueSQL(_.updateMessage, res, next, [id, message]);

exports.getAllMessages = async (res, next) => 
    issueSQL(_.selectAllMessages, res, next, []);

exports.findMessage = async (id, res, next) => 
    issueSQL(_.findSpecificMessage, res, next, [id]);
