import React from 'react';

class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput (type) {
    return (e) => (
      this.setState({ [type]: e.target.value})
    )
  }

  

  render () {
    return (
      <div className="session-form">
        <h2>Log In!</h2>
        <form>
          <label>
            username:
            <input 
              type="text" 
              value={this.username} 
              onChange={this.handleInput("username")} />
          </label>
          <br/>
          <label>
            password:
            <input 
              type="text" 
              value={this.username} 
              onChange={this.handleInput("username")} />
          </label>
          <br/>
          {/* <button type="submit" onSubmit={this.handleSubmit}>
            log in
          </button> */}
        </form>
      </div>
    );
  }
}

export default Login;