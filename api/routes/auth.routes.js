module.exports = app => {
    const router = require('express').Router();
    const auth = require('../controllers/auth.controller');

    router.get('/', async (req, res) => {
        res.send("Auth Routes");
    });

    router.post('/register', async (req, res, next) => {
        try {
            await auth.registerUser(req.body.user, res, next)
        } catch (error) {
            console.error(error);
            return res.status(500).send('An Error Has Occurred')   
        }
    })

    app.use('/api/auth', router);
};
