import React from 'react';
import SearchResults from './SearchResults';

const Search = ({
  players,
  selectedPlayers,
  value,
  handleChange,
  playerSelected
}) => {
  let matchedPlayers = players.filter(
    player =>
      !selectedPlayers.includes(player) &&
      (player.firstName.toUpperCase().startsWith(value.toUpperCase()) ||
        player.middleName.toUpperCase().startsWith(value.toUpperCase()) ||
        player.lastName.toUpperCase().startsWith(value.toUpperCase()))
  );

  return (
    <div className="search">
      <input
        className="search__input"
        type="search"
        placeholder="search for a player"
        value={value}
        onChange={handleChange}
      />
      <button
        className="search__add"
        onClick={() => playerSelected(matchedPlayers[0])}
        disabled={value.length === 0 || matchedPlayers.length === 0}
      >
        ADD
      </button>
      <SearchResults
        value={value}
        matchedPlayers={matchedPlayers}
        playerSelected={playerSelected}
      />
    </div>
  );
};

export default Search;
