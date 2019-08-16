import { connect } from 'react-redux';
import LoginDisplay from './LoginDisplay';
import { login } from '../../store/auth/actions';
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  login: e => dispatch(login(e))
});
export const Login = connect(
  null,
  mapDispatchToProps
)(LoginDisplay);
