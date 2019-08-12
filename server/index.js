require('./config');
// imports
const express = require('express');
const socketIO = require('socket.io');
const socketSetup = require('./sockets');

const app = express();

const server = app.listen(3000, () => console.log('Server started'));

// sockets
const io = socketIO(server);
socketSetup(io);
