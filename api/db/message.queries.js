module.exports = {
    createMessageTable: `CREATE TABLE IF NOT EXISTS messages (
        ID SERIAL PRIMARY KEY,
        conversation_id INT,
        sender_id INT,
        message VARCHAR(255),
        CONSTRAINT fk_conversations 
            FOREIGN KEY(conversation_id) 
                REFERENCES conversations(ID),
        CONSTRAINT 
            fk_users FOREIGN KEY(sender_id) 
                REFERENCES users(ID)
    )`,
    dropMessageTable: `DROP TABLE IF EXISTS messages`,
    createMessage: `INSERT INTO messages (
        conversation_id,
        sender_id,
        message
    ) VALUES ($1, $2, $3)`,
    deleteMessage: `DELETE FROM messages WHERE id = $1`,
    updateMessage: `UPDATE messages SET message = ($2) WHERE id = ($1)`,
    findConversationMessages: `SELECT * FROM messages WHERE conversation_id = $1`,
    selectAllMessages: `SELECT * FROM messages`,
    selectMySentMessages: `SELECT * FROM messages WHERE sender_id = $1`,
    findSpecificMessage: `SELECT * FROM messages WHERE id = $1`
}