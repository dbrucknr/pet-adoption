module.exports = app => {
    const router = require('express').Router();
    const users = require('../controllers/user.controller');
    const UserModel = require('../models/User.model');

    router.get('/show-all-tables', async (_, res, next) => {
        try {
            await users.showAllTables(res, next);
        } catch (error) {
            console.error(error);
            return res.status(500).send('An Error Has Occurred')             
        }
    });

    router.post('/create-table', async (_, res, next) => {
        try {
            await users.createTable(res, next);
        } catch (error) {
            console.error(error);
            return res.status(500).send('An Error Has Occurred')             
        }
    });

    router.post('/drop-table', async (_, res, next) => {
        try {
            await users.dropTable(res, next);
        } catch (error) {
            console.error(error);
            return res.status(500).send('An Error Has Occurred')     
        }
    });

    router.post('/create-user', async (req, res, next) => {
        try {
            const { name, email } = req.body.user;
            await users.createUser(name, email, res, next);
        } catch (error) {
            console.error(error);
            return res.status(500).send('An Error Has Occurred') 
        }
    });

    router.put('/update-user/:id', async (req, res, next) => {
        try {
            const { id } = req.params;
            const { name, email } = req.body.user;
            const model = new UserModel(name, email);
            console.log(model)
            await users.updateUser(name, email, id, res, next);
        } catch (error) {
            console.error(error);
            return res.status(500).send('An Error Has Occurred') 
        }
    });

    router.delete('/delete-user/:id', async (req, res, next) => {
        try {
            const { id } = req.params;
            await users.deleteUser(id, res, next);
        } catch (error) {
            console.error(error);
            return res.status(500).send('An Error Has Occurred')     
        }
    });

    router.get('/', async (_, res, next) => {
        try {
            await users.findAllUsers(res, next);
        } catch (error) {
            console.error(error);
            return res.status(500).send('An Error Has Occurred')            
        }
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
