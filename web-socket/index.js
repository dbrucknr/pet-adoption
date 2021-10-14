const io = require("socket.io")(8100, {
    cors: {
      origin: "http://localhost:3000",
    },
});

io.on("connection", (socket) => {
    console.log("Connection Detected");
})