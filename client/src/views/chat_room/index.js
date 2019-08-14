import { connect } from 'react-redux';
import ChatRoomDisplay from './ChatRoomDisplay';
import { reconnect } from '../../store/room/actions';
const mapStateToProps = ({ room }) => ({
  name: room.name,
  roomId: room.roomId
  users: room.users
});

const mapDispatchToProps = dispatch => ({
  reconnect: e => dispatch(reconnect(e))
});
export const ChatRoom = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatRoomDisplay);
