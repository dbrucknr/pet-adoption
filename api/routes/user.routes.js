module.exports = app => {
    const router = require('express').Router();
    const users = require('../controllers/user.controller');

    router.get('/show-all-tables', async (req, res, next) => {
        await users.showAllTables(res, next);
    });

    router.post('/create-table', async (req, res, next) => {
        await users.createTable(res, next);
    });

    router.post('/create-user', async (req, res, next) => {
        try {
            const { name, email } = req.body.user;
            await users.createUser(name, email, res, next);
        } catch (error) {
            console.error(error);
            return res.status(500).send('An Error Has Occurred') 
        }
    })

    router.get('/', async (req, res, next) => {
        await users.findAllUsers(res, next);
    });

    router.get('/:id', async (req, res, next) => {
        try {
            const { id } = req.params;
            await users.findSpecificUser(id, res, next);
        } catch (error) {
            console.error(error);
            return res.status(500).send('An Error Has Occurred')
        }
    })

    app.use('/api/users', router);
};
