const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  socketId: { type: String, required: false, default: null },
  roomId: { type: String, required: false, default: null },
  address: { type: String, required: false, default: null }
});
const User = mongoose.model('User', userSchema);

const createUser = obj => User(obj).save();
const roomUsers = roomId => User.find({ roomId });
const findByAddress = address => User.find({ address });
const findBySocket = socketId => User.find({ socketId });
const removeBySocket = socketId => User.deleteOne({ socketId }, { new: true });
module.exports = {
  roomUsers,
  createUser,
  findByAddress,
  removeBySocket,
  findBySocket
};
