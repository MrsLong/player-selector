import React, { Component } from 'react';
import './App.css';
import Players from './stl-players-2017.json';
import Cardlist from './Cardlist';
import Search from './Search';

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
    return (
      <div className="App">
        <header>
          <h1>Player Selector</h1>
        </header>
        <Search
          players={this.state.players}
          selectedPlayers={this.state.selectedPlayers}
          value={this.state.value}
          handleChange={this.handleChange.bind(this)}
          playerSelected={this.playerSelected.bind(this)}
        />
        <Cardlist
          selectedPlayers={this.state.selectedPlayers}
          removePlayer={this.removePlayer.bind(this)}
        />
      </div>
    );
  }
}

export default App;
