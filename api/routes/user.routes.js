module.exports = app => {
    const router = require('express').Router();
    const users = require('../controllers/user.controller');

    router.post('/create-table', async (req, res, next) => {
        users.createTable(req, res, next);
    });

    router.get('/', async (req, res, next) => {
        users.findAllUsers(req, res, next);
    });

    router.get('/show-all-tables', async (req, res, next) => {
        users.showAllTables(req, res, next);
    });

    app.use('/api/users', router);
};
