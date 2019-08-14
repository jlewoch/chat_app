import { connect } from 'react-redux';
import LoginDisplay from './LoginDisplay';
import { setRoom } from '../../store/room/actions';
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  joinRoom: e => dispatch(setRoom(e))
});
export const Login = connect(
  null,
  mapDispatchToProps
)(LoginDisplay);
