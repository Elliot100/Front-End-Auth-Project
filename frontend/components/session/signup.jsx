import React from 'react';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }

  handleChange(type) {
    this.setState({ [type]: this.target.valule });
  }

  handleSubmit(e) {
    e.prevenDefault();
    this.props.createNewUser(this.state);
  }

  render () {
    return (
      <div className="session-form">

      </div>
    );
  }
}

export default SignUp;
