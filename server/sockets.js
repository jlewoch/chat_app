const {
  roomUsers,
  createUser,
  findByAddress,
  removeBySocket,
  findBySocket
} = require('./models/user');
const socketSetup = io =>
  io.sockets.on('connect', socket => {
    socket.on('join-room', async ({ roomId, name, token }) => {
      try {
        // check if user is already connected based on address
        let user = await findByAddress(socket.handshake.address);
        console.log(roomId, name);
        // throw error if user is already connected
        if (user.length || !roomId || !name) throw Error('Connection error');

        // join room
        socket.join(`${roomId}`);

        // create user and set socket to user
        user = await createUser({
          socketId: socket.id,
          roomId,
          name,
          address: socket.handshake.address
        });

        // get users that are in the room
        let users = await roomUsers(roomId);

        // converts users to an object
        users = convertToObj('socketId', users);

        // send users list back
        socket.emit('users-list', users, roomId);

        // inform room of new user joining
        socket.to(roomId).emit('user-joined', user);
      } catch (error) {
        socket.emit('err');
      }
    });
    socket.on('send-message', ({ to, message, type, sent }, room) => {
      const temp = {
        from: socket.id,
        message,
        type,
        sent
      };
      socket.to(`${room}`).emit('receive-message', temp);
    });

    socket.on('disconnect', async () => {
      try {
        const user = await findBySocket(socket.id);
        socket.to(user.room).emit('user-left', { socketId: socket.id });
        await removeBySocket(socket.id);
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
