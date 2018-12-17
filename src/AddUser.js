import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddUser extends Component {
  render() {
    return (
      <div>
        <h1>New User</h1>
        <form>
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"

            />
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"

            />
            <input
              type="text"
              name="username"
              placeholder="Enter username"

            />
          </div>
          <button>Add</button>
        </form>
      </div>
    )
  }
}

export default AddUser;