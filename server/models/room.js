const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RoomSchema = Schema({
  name: { type: String, required: true },
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  protected: { type: Boolean, required: true, default: false },
  password: { type: String, required: false, select: false }
});
const Room = mongoose.model('Room', RoomSchema);
const createRoom = obj => Room(obj).save();
const deleteRoom = _id => Room.deleteOne({ _id });
const allRooms = _id =>
  Room.find()
    .select('_id name')
    .limit(20);
const roomDetails = _id => Room.findById(_id).populate('users');

const joinRoom = (_id, uid) =>
  Room.findByIdAndUpdate(_id, { $push: { users: uid } });
const leaveRoom = (_id, uid) =>
  Room.findByIdAndUpdate(_id, { $pull: { users: uid } });

module.exports = {
  createRoom,
  deleteRoom,
  allRooms,
  roomDetails,
  joinRoom,
  leaveRoom
};
