import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './User';

class UserList extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
  }

  state = {
    showGamesPlayed: true,
  };

  toggleGamesPlayed = () => {
    this.setState((currentState) => ({
      showGamesPlayed: !currentState.showGamesPlayed
    }))
  }

  render() {
    const { users } = this.props;
    const { showGamesPlayed } = this.state;
   
const gamesPlayedButton = (
      <div>
        <button className="smallButton" onClick={this.toggleGamesPlayed}>
          {showGamesPlayed ? 'Hide ' : 'Show '}
          the Number of Games Played
        </button>
      </div>
    );


    return (
      <div>
        <h1>Users</h1>
        {users && users.length > 0 ? gamesPlayedButton : ''}
        {
          users.map(user => (
            <User key={user.username} user={user} showGamesPlayed={showGamesPlayed} />
          ))
        }
      </div>
    )
  }
}

export default UserList;