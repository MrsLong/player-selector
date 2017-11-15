import React from 'react';
import { SortableElement } from 'react-sortable-hoc';

const Card = SortableElement(({ selectedPlayer, removePlayer }) => (
  <div className="card">
    <div className="card__header">
      <h2 className="card__playerName">
        {selectedPlayer.lastName}, {selectedPlayer.firstName}{' '}
        {selectedPlayer.middleName}
      </h2>
      <button
        className="card__button"
        onClick={() => removePlayer(selectedPlayer)}
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
          <td colSpan="3" data-th="Team">
            {selectedPlayer.team}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
));

export default Card;
