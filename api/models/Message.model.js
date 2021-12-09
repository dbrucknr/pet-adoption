const MessageSchema = {
  message: (instance) => instance.length > 0,
  senderID: (instance) => !isNaN(instance),
  conversationID: (instance) => !isNaN(instance),
};

const ValidMessage = (object, schema) =>
  Object.keys(schema)
    .filter((key) => !schema[key](object[key]))
    .map((key) => new Error(`${key} is invalid`)).length === 0;

const Message = (entry) =>
  !entry && ValidMessage(entry, MessageSchema)
    ? new Error("Entry Required")
    : {
        save: async function () {
          return ValidMessage(entry, MessageSchema);
        },
        delete: async function () {},
        validateEntry: async function () {},
        findOne: async function () {},
      };

module.exports = Message;
