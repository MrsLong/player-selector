import React from 'react';

const SearchResults = ({ value, matchedPlayers, playerSelected }) =>
  value.length > 0 ? (
    <ul className="dropdown">
      {matchedPlayers.length > 0 ? (
        matchedPlayers.map(matchedPlayer => (
          <li
            className="dropdown__item"
            key={matchedPlayer.mlbamId}
            onClick={() => playerSelected(matchedPlayer)}
          >
            {matchedPlayer.lastName}, {matchedPlayer.firstName}{' '}
            {matchedPlayer.middleName}
          </li>
        ))
      ) : (
        <li className="dropdown__item">No matching players</li>
      )}
    </ul>
  ) : null;

export default SearchResults;
