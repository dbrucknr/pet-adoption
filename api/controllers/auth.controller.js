const db = require('../db');
const queries = require('../db/auth.queries');

exports.registerUser = async (user, res, next) => {
    const { name, email, password } = user;
    console.log(user)
    try {
        const checkEmail = await db.queryResponse(queries.findUser, [email]);
        console.log('checkEmail', checkEmail.rowCount);
        if (checkEmail.rowCount > 0) {
            res.status(500).send('Email is in use');
            return
        };
        await db.query(queries.registerUser, [name, email, password], (err, result) => {
            if (err) {
                return next(err)
            };
            console.log('Result', result)
            res.send(result)
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('An Error Occurred')
    };
};

exports.logUserIn = async (email, res, next) => {
    try {
        await db.query(queries.findUser, [email], (err, result) => {
            if (err) {
                return next(err)
            };
            const { id, name, email } = result.rows[0];
            res.send({ id, name, email })  
        })
    } catch (error) {
        
    }
}

