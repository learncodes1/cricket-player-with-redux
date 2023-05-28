import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPlayer } from '../redux/actions';

const PlayerFormPage = () => {
  const [playerName, setPlayerName] = useState('');
  const players = useSelector(state => state.players);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (players.find(player => player.name === playerName)) {
      alert('player already exists with this name')
    }
    else if (playerName.trim() !== '') {
      dispatch(addPlayer(playerName));
      setPlayerName('');
    }
  };

  return (
    <div>
      <h1>Player Form Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter player name"
          value={playerName}
          onChange={e => setPlayerName(e.target.value)}
        />
        <button type="submit">Add Player</button>
      </form>
      <ul>
        {players.map(player => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerFormPage;
