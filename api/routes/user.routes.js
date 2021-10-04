module.exports = app => {
    const router = require('express').Router();
    const users = require('../controllers/user.controller');

    router.get('/', async (req, res) => {
        res.send("User Routes");
        users.createTable();
    });

    app.use('/api/users', router);
};
