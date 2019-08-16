const { userById } = require('./models/user');
const { roomDetails, findBySocket } = require('./models/room');
const { jwtVerify } = require('./middleware/jwt');
const socketSetup = io =>
  io.sockets.on('connect', socket => {
    socket.on('join-room', async ({ roomId, token }) => {
      try {
        const jwtToken = jwtVerify(token);
        console.log(token);
        console.log(jwtToken);
        // throw error if the token provided is invalid
        if (!jwtToken) throw Error('Connection error');
        // get users info
        let user = await userById(jwtToken.uid);
        // throw error if user does not exist
        if (!user) throw Error('Connection error');

        // join the socket to the request room
        socket.join(`${roomId}`);

        // get all of the specified room details
        let room = await roomDetails(roomId);

        // send users room info
        socket.emit('room-details', room);

        // inform the room that the user has joined
        socket.to(roomId).emit('user-joined', user);
      } catch (error) {
        socket.emit('err');
      }
    });
    socket.on(
      'send-message',
      async ({ to, message, type, sent, token }, room) => {
        try {
          const jwtToken = jwtVerify(token);

          // throw error if the token provided is invalid
          if (!jwtToken) throw Error('Connection error');
          const temp = {
            from: jwtToken.uid,
            message,
            type,
            sent
          };
          socket.to(`${room}`).emit('receive-message', temp);
        } catch (error) {
          socket.emit('err');
        }
      }
    );

    socket.on('disconnect', async hey => {
      try {
        console.log('object', hey.transport);
        // const user = await findBySocket(socket.id);
        // socket.to(user.room).emit('user-left', { socketId: socket.id });
        socket.leaveAll();
      } catch (error) {
        console.log(error.message);
      }
    });
  });
module.exports = socketSetup;
const convertToObj = (key, arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    obj[el[key]] = el;
  }
  return obj;
};
