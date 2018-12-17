import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddUser extends Component {
  static propTypes = {
    onAddUser: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
  };

  state = {
    user: {
      firstName: '',
      lastName: '',
      username: '',
    },
    userExists: false,
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState(currState => ({
      user: {
        ...currState.user,
        [name]: value,
      },
    }));
  };

  userExists = username => {
    const theSameUsernameList = this.props.users.filter((user) => (user.username === username));
    return (theSameUsernameList && theSameUsernameList.length > 0);
  }

  isDisabled = () => {
    const { firstName, lastName, username } = this.state.user;
    return firstName === '' || lastName === '' || username === '';
  };

  handleAddUser = (event) => {
    event.preventDefault();
    const userExists = this.userExists(this.state.user.username);
    
    if (!userExists) {
      this.props.onAddUser(this.state.user);
    }

    this.setState(() => ({
      userExists: userExists,
    }));
  };

  render() {
    const {firstname, lastname, username} = this.state.user;

    return (
      <div>
        <h1>New User</h1>
        <form onSubmit={this.handleAddUser}>
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              value={firstname}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              value={lastname}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              value={username}
              onChange={this.handleInputChange}
            />
          </div>
          {this.state.userExists
            ? <p className="error">You cannot add a user that already exists.</p>
            : ''}
          <button disabled={this.isDisabled()}>Add</button>
        </form>
      </div>
    )
  }
}

export default AddUser;