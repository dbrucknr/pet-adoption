module.exports = app => {
    const router = require('express').Router();
    const messages = require('../controllers/message.controller');

    router.post('/create-table', async (_, res, next) => {
        try {
            await messages.createTable(res, next);
        } catch (error) {
            console.error(error);
            return res.status(500).send('An Error Has Occurred')             
        }
    });

    router.post('/drop-table', async (_, res, next) => {
        try {
            await messages.dropTable(res, next)
        } catch (error) {
            console.error(error);
            return res.status(500).send('An Error Has Occurred')     
        }
    });

    app.use('/api/messages', router);
};
