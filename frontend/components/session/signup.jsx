import React from 'react';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type) {
    this.setState({ [type]: this.target.value });
  }

  handleSubmit(e) {
    e.prevenDefault();
    this.props.createNewUser(this.state);
  }

  render () {
    return (
      <div className="session-form">
        <h2>Sign Up!</h2>
        <form>
          <label>username:
            <input 
              type="text" 
              value={this.state.username} 
              onChange={this.handleChange("username")} />
          </label>
          <br />
          <label>email:
            <input 
              type="text" 
              value={this.state.email} 
              onChange={this.handleChange("email")} />
          </label>
          <br />
          <label>username: 
          <input 
            type="password" 
            value={this.state.password} 
            onChange={this.handleChange("password")} />
          </label>  
          <br />

          <button onClick={this.handleSubmit}>sign up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
