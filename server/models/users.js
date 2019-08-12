const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: String,
  socketId: String,
  roomId: String,
  address: String
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
