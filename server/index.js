require('dotenv').config();
require('./config');

// imports
const express = require('express');
const socketIO = require('socket.io');
const socketSetup = require('./sockets');
// vaiables
const app = express();

// middleware
// serve client
app.use('/', express.static('../client/build'));
// routes
app.use('/auth');

// start server
const server = app.listen(3000, () => console.log('Server started'));

// sockets
const io = socketIO(server);
socketSetup(io);
