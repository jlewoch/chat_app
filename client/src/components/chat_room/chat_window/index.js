import { connect } from 'react-redux';
import ChatWindowDisplay from './ChatWindowDisplay';
import { setRoom, receiveMessage } from '../../../store/room/actions';
const mapStateToProps = ({ room }) => ({
  users: {},
  messages: []
});

const mapDispatchToProps = dispatch => ({
  send: e => dispatch(receiveMessage(e))
});

export const ChatWindow = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatWindowDisplay);
