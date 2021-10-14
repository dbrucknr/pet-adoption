const io = require("socket.io")(8100, {
    cors: {
      origin: "http://localhost:3000",
    },
});

const USERS = [];

const setUserOnline = (userId, socketId) => 
    !USERS.some((user) => user.userId === userId) && USERS.push({ userId, socketId });

const setUserOffline = socketId => 
    USERS = USERS.filter((user) => user.socketId !== socketId);

const findUser = userId => 
    USERS.find((user) => user.userId === userId)

io.on("connection", (socket) => {
    console.log("Connection Detected");

    socket.on("setUserOnline", (userId) => {
        setUserOnline(userId, socket.id);
        io.emit("getOnlineUsers", USERS);
    });

    socket.on("sendMessage", ({ senderId, receiverId, message }) => {
        const receiver = findUser(receiverId);
        io.to(receiver.socketId).emit("message", {
            senderId, message
        });
    });

    socket.on("disconnect", () => {
        setUserOffline(socket.id);
        io.emit("getOnlineUsers", USERS);
    })
})