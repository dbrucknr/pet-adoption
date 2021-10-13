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

    router.post('/create', async (req, res, next) => {
        const { conversation_id, sender_id, message } = req.body.message;
        try {
            await messages.createMessage(
                conversation_id,
                sender_id,
                message,
                res, 
                next
            );
        } catch (error) {
            console.error(error);
            return res.status(500).send('An Error Has Occurred')  
        }
    });

    router.get('/:id', async (req, res, next) => {
        try {
            const { id } = req.params;
            await messages.findConversationMessages(id, res, next);
        } catch (error) {
            console.error(error);
            return res.status(500).send('An Error Has Occurred')  
        }
    });

    app.use('/api/messages', router);
};
