module.exports = (app) => {
  const router = require("express").Router();
  const Message = require("../models/Message.model");
  const messages = require("../controllers/message.controller");

  router.post("/create-table", async (_, res, next) => {
    try {
      await messages.createTable(res, next);
    } catch (error) {
      console.error(error);
      return res.status(500).send("An Error Has Occurred");
    }
  });

  router.post("/drop-table", async (_, res, next) => {
    try {
      await messages.dropTable(res, next);
    } catch (error) {
      console.error(error);
      return res.status(500).send("An Error Has Occurred");
    }
  });

  // CREATE A NEW MESSAGE
  router.post("/create", async (req, res, next) => {
    const { conversation_id, sender_id, message } = req.body.message;
    try {
      await messages.createMessage(
        conversation_id,
        sender_id,
        message,
        res,
        next
      );
    } catch (error) {
      console.error(error);
      return res.status(500).send("An Error Has Occurred");
    }
  });

  // FIND ALL MESSAGES WITHIN A CONVERSATION
  router.get("/conversation/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      await messages.findConversationMessages(id, res, next);
    } catch (error) {
      console.error(error);
      return res.status(500).send("An Error Has Occurred");
    }
  });

  // DELETE SPECIFIC MESSAGE
  router.delete("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      await messages.deleteMessage(id, res, next);
    } catch (error) {
      console.error(error);
      return res.status(500).send("An Error Has Occurred");
    }
  });

  // UPDATE SPECIFIC MESSAGE
  router.put("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const { message } = req.body;
      await messages.updateMessage(id, message, res, next);
    } catch (error) {
      console.error(error);
      return res.status(500).send("An Error Has Occurred");
    }
  });

  // GET ALL MESSAGES
  router.get("/", async (_, res, next) => {
    try {
      await messages.getAllMessages(res, next);
    } catch (error) {
      console.error(error);
      return res.status(500).send("An Error Has Occurred");
    }
  });

  // FIND SPECIFIC MESSAGE
  router.get("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      await messages.findMessage(id, res, next);
    } catch (error) {
      console.error(error);
      return res.status(500).send("An Error Has Occurred");
    }
  });

  app.use("/api/messages", router);
};
