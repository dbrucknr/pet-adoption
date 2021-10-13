module.exports = app => {
    const router = require('express').Router();
    const conversations = require('../controllers/conversation.controller');

    // CREATE CONVERSATION DB TABLE
    router.post('/create-table', async (_, res, next) => {
        try {
            await conversations.createTable(res, next);
        } catch (error) {
            console.error(error);
            return res.status(500).send('An Error Has Occurred')             
        }
    });

    // DELETE CONVERSATION DB TABLE
    router.post('/drop-table', async (_, res, next) => {
        try {
            await conversations.dropTable(res, next)
        } catch (error) {
            console.error(error);
            return res.status(500).send('An Error Has Occurred')     
        }
    });

    // CREATE A CONVERSATION
    router.post('/create', async (req, res, next) => {
        try {
            const members = req.body.members;
            await conversations.createConversation(members, res, next);
        } catch (error) {
            console.error(error);
            return res.status(500).send('An Error Has Occurred')     
        }
    });

    // SELECT A SPECIFIC CONVERSATION INSTANCE
    router.get('/:id', async (req, res, next) => {
        try {
            const { id } = req.params;
            await conversations.selectConversation(id, res, next);
        } catch (error) {
            console.error(error);
            return res.status(500).send('An Error Has Occurred')     
        }
    });

    // SELECT ALL CONVERSATIONS
    router.get('/', async (req, res, next) => {
        try {
            await conversations.selectAllConversations(res, next);
        } catch (error) {
            console.error(error);
            return res.status(500).send('An Error Has Occurred')     
        }
    });

    // ADD MEMBERS TO A SPECIFIC CONVERSATION
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

    // DELETE A SPECIFIC CONVERSATION
    router.delete('/:id', async (req, res, next) => {
        try {
            const { id } = req.params;
            await conversations.deleteConversation(id, res, next);
        } catch (error) {
            console.error(error);
            return res.status(500).send('An Error Has Occurred')     
        }
    });

    // FIND CONVERSATIONS OF SPECIFIC USER
    router.get("/my-conversations/:userId", async (req, res, next) => {
        try {
            const { userId } = req.params;
            await conversations.selectMyConversations(userId, res, next);
        } catch (error) {
            console.error(error);
            return res.status(500).send('An Error Has Occurred') 
        }
    });
    
    // FIND CONVERSATION BETWEEN ANY NUMBER OF USERS
    router.get("/my-conversations/*", async (req, res, next) => {
        try {
            const ids = req.params['0'] ? req.params['0'].split('/') : [];
            await conversations.selectConversationBetween(ids, res, next);
        } catch (error) {
            console.error(error);
            return res.status(500).send('An Error Has Occurred') 
        }
    });
  

    app.use('/api/conversations', router);
};
