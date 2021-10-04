const db = require('../config/postgres.config');
const queries = require('../queries/user.queries');

exports.createTable = async (req, res) => {
    db.execute(queries.createUserTable);
}
