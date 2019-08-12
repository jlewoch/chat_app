import { connect } from 'react-redux';
import UserListDisplay from './UserListDisplay';
import { setRoom } from '../../store/room/actions';
const mapStateToProps = ({ room }) => ({ users: room.users });

const mapDispatchToProps = dispatch => ({});

export const UserList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListDisplay);
