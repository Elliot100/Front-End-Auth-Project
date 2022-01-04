import React from 'react';

class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  render () {
    return (
      <div className="session-form">
      <h2>Log In!</h2>

      </div>
    )
  }
}

export default Login;