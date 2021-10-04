module.exports = app => {
    const router = require('express').Router();

    router.get('/', async (req, res) => {
        res.send("Auth Routes");
    })

    app.use('/api/auth', router);
};
