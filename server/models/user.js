const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true, select: false },
  socketId: { type: String, required: false, default: null },
  address: { type: String, required: false, default: null, select: false }
});
const User = mongoose.model('User', userSchema);

const createUser = obj => User(obj).save();
const findByEmail = email => User.find({ email }).select('+password');
const userById = _id => User.findById(_id);
const updateSocket = (_id, socketId) =>
  User.findByIdAndUpdate(_id, { socketId });
module.exports = {
  createUser,
  userById,
  updateSocket,
  findByEmail
};
