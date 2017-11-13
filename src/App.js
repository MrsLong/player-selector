import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Player Selector</h1>
        </header>
        <div className="search">
          <input type="search" placeholder="search for a player" />
          <button>ADD</button>
        </div>
        <div className="Card">
          <p>PLAYER NAME</p>
          <button>X</button>
          <table>
            <thead>
              <th>POSITION</th>
              <th>BATS</th>
              <th>THROWS</th>
              <th>TEAM</th>
              <th>LEVEL</th>
            </thead>
            <tbody>
              <td>#</td>
              <td>#</td>
              <td>#</td>
              <td>#</td>
              <td>#</td>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
