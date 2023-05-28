import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearData } from '../redux/actions';

const HomePage = () => {
  const dispatch = useDispatch();
  const totalPlayers = useSelector(state => state.players.length);
  const totalTeams = useSelector(state => state.teams.length);
  const totalMatches = useSelector(state => state.matches.length);
  const remainingPlayers = useSelector(state => {
    const selectedPlayers = state.players.filter(player => !state.teams.find(team => team.players.includes(player.id)))
    return selectedPlayers;
  });

  const handleClearData = () => {
    dispatch(clearData());
  };

  return (
    <div>
      <table id="customers">
  <tr>
    <th>Total Players</th>
    <th>Total Teams</th>
    <th>Total Matches</th>
    <th>Remaining Players</th>
  </tr>
  <tr>
    <td>{totalPlayers}</td>
    <td>{totalTeams}</td>
    <td>{totalMatches}</td>
    <td>{remainingPlayers.length}</td>
  </tr>
  </table>
<button className="button" onClick={handleClearData}>Clear Data</button>
    </div>
  );
};

export default HomePage;
