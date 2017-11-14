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

  removePlayer(selectedPlayer) {
    this.setState({
      selectedPlayers: this.state.selectedPlayers.filter(
        x => x !== selectedPlayer
      )
    });
  }

  render() {
    let matchedPlayers = this.state.players.filter(
      player =>
        !this.state.selectedPlayers.includes(player) &&
        (player.firstName
          .toUpperCase()
          .startsWith(this.state.value.toUpperCase()) ||
          player.middleName
            .toUpperCase()
            .startsWith(this.state.value.toUpperCase()) ||
          player.lastName
            .toUpperCase()
            .startsWith(this.state.value.toUpperCase()))
    );

    return (
      <div className="App">
        <header>
          <h1>Player Selector</h1>
        </header>
        <div className="search">
          <input
            className="search__input"
            type="search"
            placeholder="search for a player"
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
          <button
            className="search__add"
            onClick={this.playerSelected.bind(this, matchedPlayers[0])}
          >
            ADD
          </button>
          {this.state.value.length > 0 ? (
            <ul className="dropdown">
              {matchedPlayers.length > 0 ? (
                matchedPlayers.map(matchedPlayer => (
                  <li
                    className="dropdown__item"
                    key={matchedPlayer.mlbamId}
                    onClick={this.playerSelected.bind(this, matchedPlayer)}
                  >
                    {matchedPlayer.lastName}, {matchedPlayer.firstName}{' '}
                    {matchedPlayer.middleName}
                  </li>
                ))
              ) : (
                <li className="dropdown__item">No matching players</li>
              )}
            </ul>
          ) : null}
        </div>
        {this.state.selectedPlayers.length > 0
          ? this.state.selectedPlayers.map(selectedPlayer => (
              <div className="card" key={selectedPlayer.mlbamId}>
                <div className="card__header">
                  <h2 className="card__playerName">
                    {selectedPlayer.lastName}, {selectedPlayer.firstName}{' '}
                    {selectedPlayer.middleName}
                  </h2>
                  <button
                    className="card__button"
                    onClick={this.removePlayer.bind(this, selectedPlayer)}
                  >
                    X
                  </button>
                </div>
                <table className="card__table">
                  <thead>
                    <tr>
                      <th>POSITION</th>
                      <th>BATS</th>
                      <th>THROWS</th>
                      <th>LEVEL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-th="Position">{selectedPlayer.position}</td>
                      <td data-th="Bats">{selectedPlayer.bats}</td>
                      <td data-th="Throws">{selectedPlayer.throws}</td>
                      <td data-th="Level">{selectedPlayer.level}</td>
                    </tr>
                    <tr>
                      <th>TEAM</th>
                      <td colspan="3" data-th="Team">
                        {selectedPlayer.team}
                      </td>
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
