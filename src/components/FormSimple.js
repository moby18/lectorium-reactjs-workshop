import React from 'react';

export default class FormSimple extends React.Component{
  constructor (props) {
    super(props);

    this.state = {
      email: '',
      emailError: '',
      password: '',
      passwordError: ''
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  onChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    })
  }

  onChangeEmail(event) {
    this.setState({
      email: event.target.value
    })
  }

  onChangePassword(event) {
    this.setState({
      password: event.target.value
    })
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.state.email === '') {
      this.setState({
        emailError: 'Input should not be empty'
      })
    }
    if (this.state.password.length < 8) {
      this.setState({
        passwordError: 'Password should not be empty'
      })
    }
  }

  render() {
    const { emailError, passwordError } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" onChange={this.onChangeEmail} />
          {emailError !== '' && <span>{emailError}</span>}
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={this.onChangePassword}/>
          {passwordError !== '' && <span>{passwordError}</span>}
          <button onClick={this.onSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}
