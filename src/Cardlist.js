import React from 'react';
import Card from './Card';
import { SortableContainer } from 'react-sortable-hoc';

const Cardlist = SortableContainer(
  ({ selectedPlayers, removePlayer }) =>
    selectedPlayers.length > 0 ? (
      <div className="cardlist">
        {selectedPlayers.map((selectedPlayer, index) => (
          <Card
            index={index}
            key={selectedPlayer.mlbamId}
            selectedPlayer={selectedPlayer}
            removePlayer={removePlayer}
          />
        ))}
      </div>
    ) : (
      <div />
    )
);

export default Cardlist;
