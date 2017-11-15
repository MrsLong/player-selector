import React, { Component } from 'react';
import './App.css';
import Players from './stl-players-2017.json';
import Cardlist from './Cardlist';
import Search from './Search';
import { arrayMove } from 'react-sortable-hoc';

class App extends Component {
  state = {
    // Clean up missing data from the JSON file
    players: Players.map(({ middleName = '', ...rest }) => ({
      middleName,
      ...rest
    })),
    value: '',
    selectedPlayers: []
  };

  inputChanged(event) {
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

  onSortEnd({ oldIndex, newIndex }) {
    this.setState({
      selectedPlayers: arrayMove(this.state.selectedPlayers, oldIndex, newIndex)
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
          inputChanged={this.inputChanged.bind(this)}
          playerSelected={this.playerSelected.bind(this)}
        />
        <Cardlist
          lockAxis={'y'}
          selectedPlayers={this.state.selectedPlayers}
          onSortEnd={this.onSortEnd.bind(this)}
          removePlayer={this.removePlayer.bind(this)}
        />
      </div>
    );
  }
}

export default App;
