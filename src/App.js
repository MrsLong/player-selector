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
          <button onClick={this.playerSelected.bind(this, matchedPlayers[0])}>
            ADD
          </button>
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
        {this.state.selectedPlayers.length > 0
          ? this.state.selectedPlayers.map(selectedPlayer => (
              <div className="card" key={selectedPlayer.mlbamId}>
                <p>
                  {selectedPlayer.lastName}, {selectedPlayer.firstName}{' '}
                  {selectedPlayer.middleName}
                </p>
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
                      <td>{selectedPlayer.position}</td>
                      <td>{selectedPlayer.bats}</td>
                      <td>{selectedPlayer.throws}</td>
                      <td>{selectedPlayer.level}</td>
                      <td>{selectedPlayer.team}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default App;
