module.exports = {
    createConversationTable: `CREATE TABLE IF NOT EXISTS conversations (
        ID SERIAL PRIMARY KEY,
        members INT [] 
    )`,
    dropConversationTable: `DROP TABLE IF EXISTS conversations`,
    createConversation: `INSERT INTO conversations (members) VALUES(
        ARRAY [$1, $2]
    )`,
}