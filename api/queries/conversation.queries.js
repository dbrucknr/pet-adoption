module.exports = {
    createConversationTable: `CREATE TABLE IF NOT EXISTS conversations (
        ID SERIAL PRIMARY KEY,
        members INT [] 
    )`,
    dropConversationTable: `DROP TABLE IF EXISTS conversations`,
    createConversation: `INSERT INTO conversations (members) VALUES($1)`,
    selectSpecifcConversation: `SELECT * FROM conversations WHERE id = $1`,
    selectAllConversations: `SELECT * FROM conversations`,
    updateConversationsMembers: `UPDATE conversations SET members = ($2) WHERE id = ($1)`,
    deleteConversation: `DELETE FROM conversations WHERE id = $1`
}