module.exports = app => {
    const router = require('express').Router();
    const conversations = require('../controllers/conversation.controller');

    router.post('/create-table', async (_, res, next) => {
        try {
            await conversations.createTable(res, next);
        } catch (error) {
            console.error(error);
            return res.status(500).send('An Error Has Occurred')             
        }
    });

    router.post('/drop-table', async (_, res, next) => {
        try {
            await conversations.dropTable(res, next)
        } catch (error) {
            console.error(error);
            return res.status(500).send('An Error Has Occurred')     
        }
    });

    router.post('/create', async (req, res, next) => {
        try {
            const members = req.body.members;
            await conversations.createConversation(members, res, next);
        } catch (error) {
            console.error(error);
            return res.status(500).send('An Error Has Occurred')     
        }
    });

    router.get('/:id', async (req, res, next) => {
        try {
            const { id } = req.params;
            await conversations.selectConversation(id, res, next);
        } catch (error) {
            console.error(error);
            return res.status(500).send('An Error Has Occurred')     
        }
    });

    router.get('/', async (req, res, next) => {
        try {
            await conversations.selectAllConversations(res, next);
        } catch (error) {
            console.error(error);
            return res.status(500).send('An Error Has Occurred')     
        }
    });

    router.put('/:id', async (req, res, next) => {
        try {
            const { id } = req.params;
            const members = req.body.members;
            await conversations.updateConversation(members, id, res, next);
        } catch (error) {
            console.error(error);
            return res.status(500).send('An Error Has Occurred')     
        }
    });

    router.delete('/:id', async (req, res, next) => {
        try {
            const { id } = req.params;
            await conversations.deleteConversation(id, res, next);
        } catch (error) {
            console.error(error);
            return res.status(500).send('An Error Has Occurred')     
        }
    });

    app.use('/api/conversations', router);
};
