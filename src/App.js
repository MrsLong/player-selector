import React, { Component } from 'react';
import './App.css';
import Players from './stl-players-2017.json';

class App extends Component {
  state = {
    players: Players.map(({ middleName = '', ...rest }) => ({
      middleName,
      ...rest
    })),
    value: '',
    selectedPlayers: []
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  playerSelected(matchedPlayer) {
    this.setState({
      value: '',
      selectedPlayers: [...this.state.selectedPlayers, matchedPlayer]
    });
  }

  render() {
    let matchedPlayers = this.state.players.filter(
      player =>
        player.firstName
          .toUpperCase()
          .startsWith(this.state.value.toUpperCase()) ||
        player.middleName
          .toUpperCase()
          .startsWith(this.state.value.toUpperCase()) ||
        player.lastName.toUpperCase().startsWith(this.state.value.toUpperCase())
    );

    return (
      <div className="App">
        <header>
          <h1>Player Selector</h1>
        </header>
        <div className="search">
          <input
            type="search"
            placeholder="search for a player"
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
          <button>ADD</button>
          {this.state.value.length > 0 ? (
            <ul className="dropdown">
              {matchedPlayers.map(matchedPlayer => (
                <li
                  className="dropdown__item"
                  key={matchedPlayer.mlbamId}
                  onClick={this.playerSelected.bind(this, matchedPlayer)}
                >
                  {matchedPlayer.lastName}, {matchedPlayer.firstName}{' '}
                  {matchedPlayer.middleName}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="card">
          <p>PLAYER NAME</p>
          <button>X</button>
          <table>
            <thead>
              <tr>
                <th>POSITION</th>
                <th>BATS</th>
                <th>THROWS</th>
                <th>TEAM</th>
                <th>LEVEL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
