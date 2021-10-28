import { io } from "socket.io-client";

const URL = "ws://localhost:8100";
const socket = io(URL, 
    { 
        autoConnect: false, 
        transports: ['websocket'], 
        upgrade: false 
    }
);

socket.onAny((event, ...args) => {
    console.log(event, args);
});
  
export default socket;