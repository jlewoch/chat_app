import { connect } from 'react-redux';
import RoomsDisplay from './RoomsDisplay';
import { setRoom } from '../../store/room/actions';
const mapStateToProps = ({ room }) => ({
  rooms: room.rooms
});

const mapDispatchToProps = dispatch => ({
  setRoom: e => dispatch(setRoom(e))
});
export const Rooms = connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomsDisplay);
