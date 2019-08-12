import { connect } from 'react-redux';
import RoomSelectionDisplay from './RoomSelectionDisplay';
import { setRoom } from '../../store/room/actions';
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  joinRoom: e => dispatch(setRoom(e))
});
export const RoomSelection = connect(
  null,
  mapDispatchToProps
)(RoomSelectionDisplay);
