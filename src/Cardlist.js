import React from 'react';
import Card from './Card';

const Cardlist = ({ selectedPlayers, removePlayer }) =>
  selectedPlayers.length > 0
    ? selectedPlayers.map(selectedPlayer => (
        <Card
          key={selectedPlayer.mlbamId}
          selectedPlayer={selectedPlayer}
          removePlayer={removePlayer}
        />
      ))
    : null;

export default Cardlist;
