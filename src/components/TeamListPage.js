import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTeam, assignPlayerToTeam } from '../redux/actions';

const TeamListPage = () => {
  const [teamName, setTeamName] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');
  const players = useSelector(state => state.players);
  const teams = useSelector(state => state.teams);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (teams.find(team => team.name === teamName)) {
      alert('Team already exists');
    }
    else if (teamName.trim() !== '') {
      dispatch(createTeam(teamName));
    }
    setTeamName('');
  };

  const handleTeamSelect = teamId => {
    setSelectedTeam(teamId);
    setSelectedPlayers(teams.find(team => team.id === teamId).players)
  };

  const handlePlayerSelect = playerId => {
    const alreadySelected = teams.find(team => team.id !== selectedTeam && team.players.includes(playerId))
    if (alreadySelected) {
      alert('Player already selected by other team')
      return
    }
    setSelectedPlayers(prevSelectedPlayers => {
      if (prevSelectedPlayers.includes(playerId)) {
        return prevSelectedPlayers.filter(id => id !== playerId);
      } else {
        return [...prevSelectedPlayers, playerId];
      }
    });
  };
  console.log({ teams })

  const handleAssignPlayers = () => {
    if (selectedTeam !== '') {
      dispatch(assignPlayerToTeam(selectedPlayers, selectedTeam));
      setSelectedTeam('');
      setSelectedPlayers([]);
    }
  };

  return (
    <div>
      <h1>Team List Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter team name"
          value={teamName}
          onChange={e => setTeamName(e.target.value)}
        />
        <button type="submit">Create Team</button>
      </form>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <h2>Teams:</h2>
          <ul>
            {teams.map(team => (
              <li key={team.id}>
                <label>
                  <input
                    type="radio"
                    checked={selectedTeam === team.id}
                    onChange={() => handleTeamSelect(team.id)}
                  />
                  {team.name}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <h2>Players:</h2>
          <ul>
            {players.map(player => (
              <li key={player.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedPlayers?.includes(player.id)}
                    onChange={() => handlePlayerSelect(player.id)}
                    disabled={teams.find(team => team.id !== selectedTeam && team?.players?.includes(player.id))}
                  />
                  {player.name}
                </label>
              </li>
            ))}
          </ul>
          {selectedTeam && <button onClick={handleAssignPlayers}>Assign Players</button>}
        </div>
      </div>
    </div>
  );
};

export default TeamListPage;
