import React, { Component } from 'react';
import './App.css';
import Players from './stl-players-2017.json';

class App extends Component {
  state = {
    players: Players,
    value: '',
    selectedPlayers: []
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
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
            <div className="dropdown-menu show">
              <a className="dropdown-item">option 1</a>
              <a className="dropdown-item">option 2</a>
              <a className="dropdown-item">option 3</a>
            </div>
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
