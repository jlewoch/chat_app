import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Login } from '../login';
const authWrapper = ComposedComponent => {
  class Authenticate extends React.Component {
    componentDidMount() {
      this.checkAuth();
    }
    componentDidUpdate(prevProps, prevState) {}
    checkAuth = () => {
      const token = localStorage.getItem('token');
      if (!token) {
        this.props.history.push('/');
      }
    };

    render() {
      console.log(this.props.isAuthenticated);

      return this.props.isAuthenticated ? (
        <ComposedComponent {...this.props} />
      ) : null;
    }
  }

  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });

  const mapDispatchToProps = dispatch => ({});

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Authenticate);
};
export default authWrapper;
