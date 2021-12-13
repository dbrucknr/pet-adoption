const ConversationSchema = {
  id: (instance) => !isNaN(instance),
  members: (instance) => instance.length > 0,
};

const ValidConversation = (object, schema) =>
  Object.keys(schema)
    .filter((key) => !schema[key](object[key]))
    .map((key) => new Error(`${key} is invalid`)).length === 0;

const Conversation = (entry) =>
  !entry || !ValidConversation(entry, ConversationSchema)
    ? new Error("Entry Required")
    : {
        save: async function () {
          return ValidConversation(entry, ConversationSchema);
        },
        delete: async function () {},
        validateEntry: async function () {},
        findOne: async function () {},
      };

module.exports = Conversation;
