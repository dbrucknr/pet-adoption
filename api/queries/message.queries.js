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
}