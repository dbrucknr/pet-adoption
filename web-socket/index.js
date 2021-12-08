const io = require("socket.io")(8100, {
    transports: ["websocket"],
    cors: {
      origin: "http://localhost:8080",
    },
});

let USERS = [];

const setUserOnline = (userId, socketId) => 
    !USERS.some((user) => user.userId === userId) && USERS.push({ userId, socketId });

const setUserOffline = socketId => 
    USERS = USERS.filter((user) => user.socketId !== socketId);

const findUser = userId => 
    USERS.find((user) => user.userId === userId)

io.use((socket, next) => {
    const username = socket.handshake.auth.username;
    if (!username) {
        return next(new Error("invalid username"));
    }
    socket.username = username;
    next();
});

io.on("connection", (socket) => {
    console.log("Connection Detected");

    socket.on("setUserOnline", (userId) => {
        setUserOnline(userId, socket.id);
        io.emit("getOnlineUsers", USERS);
    });

    // I think receiverId is the same as conversationId
    // May need to emit to the conversation itself, rather than a single person
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
});

console.log('Socket listening')
