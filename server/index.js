require('dotenv').config();
require('./config');

// imports
const express = require('express');
const socketIO = require('socket.io');
const socketSetup = require('./sockets');
const bodyParser = require('body-parser');
// vaiables
const app = express();

// middleware
app.use(require('cors')());
app.use(bodyParser.json());
// serve client
app.use('/', express.static('../client/build'));
// routes
app.use('/', require('./routes'));

// start server
const server = app.listen(3000, () => console.log('Server started'));

// sockets
const io = socketIO(server);
socketSetup(io);
