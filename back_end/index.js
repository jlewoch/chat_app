const io = require("socket.io")(80);

let users = {};

const home = io.of("/home").on("connection", socket => {
  socket.on("message", message => {
    const data = JSON.parse(message);
    switch (data.type) {
      case "ADD_USER":
        users = {
          ...users,
          [socket.id]: {
            name: data.name,
            joined: new Date()
          }
        };
        console.log(users);

        home.emit("message", JSON.stringify({ type: "USERS_LIST", users }));
        home.emit("message", JSON.stringify({type:'ADD_MESSAGE', message: 'user has joined', author:'System'}));
        break;
      case "ADD_MESSAGE":
        console.log(data);

        home.emit("message", JSON.stringify(data));
        break;
      default:
        break;
    }
  });
});
