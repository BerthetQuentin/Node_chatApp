const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, '../public')));

let users = [];

io.on("connection", (socket) => {
    console.log("a user connected");

    socket.on("set username", (user, callback) => {
        if (users.includes(user)) {
            callback(false); // Username already taken
        } else {
            users.push(user);
            socket.username = user;
            callback(true); // Username accepted
            console.log("Username set to: " + user);
            io.emit("user connected", user);
        }
    });

    socket.on("chat message", (msg) => {
        if (socket.username) {
            console.log("message: " + socket.username + ": " + msg);
            io.emit("chat message", socket.username + ": " + msg);
        }
    });

    socket.on("disconnect", () => {
        if (socket.username) {
            users = users.filter(user => user !== socket.username);
            console.log("user disconnected: " + socket.username);
            io.emit("user disconnected", socket.username);
        }
    });
});

server.listen(3000, () => {
    console.log("listening on *:3000");
});
