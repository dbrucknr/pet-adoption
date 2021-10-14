const _ = require('../db/user.queries');
const issueSQL = require('./utils');

exports.findAllUsers = async (res, next) => 
    issueSQL(_.findAllUsers, res, next, []);

exports.findSpecificUser = async (id, res, next) => 
    issueSQL(_.findSpecificUser, res, next, [id]);

exports.updateUser = async (id, name, email, res, next) => 
    issueSQL(_.updateUser, res, next, [name, email, id]);

exports.deleteUser =  async (id, res, next) => 
    issueSQL(_.deleteUser, res, next, [id]);

// TO BE MOVED TO ADMIN CONTROLLER
exports.showAllTables = async (res, next) => 
    issueSQL(_.showAllTables, res, next, []);

exports.createTable = async (res, next) => 
    issueSQL(_.createUserTable, res, next, []);

exports.dropTable = async (res, next) => 
    issueSQL(_.dropUserTable, res, next, []);
