import { connect } from 'react-redux';
import ChatRoomDisplay from './ChatRoomDisplay';
const mapStateToProps = ({ room }) => ({});

const mapDispatchToProps = dispatch => ({});
export const ChatRoom = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatRoomDisplay);
