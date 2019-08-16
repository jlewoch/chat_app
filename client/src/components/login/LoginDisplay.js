import React, { Component } from 'react';
import Input from '../Input';
class LoginDisplay extends Component {
  state = { form: { password: '', email: '' }, errors: {} };
  changeHandler = e => {
    this.setState(state => ({
      ...state,
      form: { ...state.form, ...e },
      errors: {}
    }));
  };
  submitHandler = e => {
    e.preventDefault();
    this.validate(this.state.form);

    Object.keys(this.state.errors).length === 0 &&
      this.props.login(this.state.form);
  };
  validate = e => {
    let errors = {};
    if (e.password.trim().length === 0) {
      errors.password = true;
    }
    if (e.email.trim().length === 0) {
      errors.email = true;
    }
    this.setState({ errors });
  };
  render() {
    const { email, password } = this.state.form;
    const { errors } = this.state;

    return (
      <div id="login">
        <div className="login-container">
          <h1>Socket Chat Login</h1>

          <div className="login">
            <form onSubmit={this.submitHandler}>
              <Input
                autofocus
                placeholder="Email"
                name="email"
                id="email"
                required
                onChange={this.changeHandler}
                errorMessage="Enter a valid email address"
                error={errors['email']}
                value={email}
              />
              <Input
                placeholder="Password"
                name="password"
                id="password"
                required
                onChange={this.changeHandler}
                errorMessage="Password required"
                error={errors['password']}
                value={password}
              />
              <div className="actions">
                <input type="submit" value="Login" className="btn" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginDisplay;
