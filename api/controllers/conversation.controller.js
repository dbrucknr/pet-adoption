const _ = require('../db/conversation.queries');
const issueSQL = require('./utils');

exports.createTable = async (res, next) => 
    issueSQL(_.createConversationTable, res, next, []);

exports.dropTable = async (res, next) => 
    issueSQL(_.dropConversationTable, res, next, []);

exports.createConversation = async (members, res, next) => 
    issueSQL(_.createConversation, res, next, [members]);

exports.selectConversation = async (id, res, next) => 
    issueSQL(_.selectSpecifcConversation, res, next, [id]);

exports.selectMyConversations = async (id, res, next) => 
    issueSQL(_.selectMyConversations, res, next, [id]);

exports.selectConversationBetween = async (ids, res, next) => 
    issueSQL(_.selectConversationBetween, res, next, [ids]);

exports.selectAllConversations = async (res, next) => 
    issueSQL(_.selectAllConversations, res, next, []);

exports.updateConversation = async (members, id, res, next) => 
    issueSQL(_.updateConversationsMembers, res, next, [id, members]);

exports.deleteConversation = async (id, res, next) => 
    issueSQL(_.deleteConversation, res, next, [id]);
