import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createMatch, assignTeamsToMatch } from '../redux/actions';

const MatchCreationPage = () => {
  const [matchName, setMatchName] = useState('');
  const [selectedTeam1, setSelectedTeam1] = useState('');
  const [selectedTeam2, setSelectedTeam2] = useState('');
  const teams = useSelector(state => state.teams);
  const matches = useSelector(state => state.matches);
  const dispatch = useDispatch();

  const handleTeam1Select = e => {
    setSelectedTeam1(e.target.value);
  };

  const handleTeam2Select = e => {
    setSelectedTeam2(e.target.value);
  };

  const handleCreateMatch = () => {
    const name = matchName.trim()
    if (matches.find(match => match.name === name)) {
      alert('match with this name already exists use different name')
      return
    }
    if (selectedTeam1 !== '' && selectedTeam2 !== '' && name) {
      dispatch(assignTeamsToMatch(selectedTeam1, selectedTeam2, name));
      setSelectedTeam1('');
      setSelectedTeam2('');
      setMatchName('')
    }
  };
  const getTeamDataById = (teamId) => {
    return teams.find(team => team.id === teamId)
  }

  return (
    <div>
      <h1>Match Creation Page</h1>
      <div>
        <h2>Create Match:</h2>
        <input
          type="text"
          placeholder="Enter match name"
          value={matchName}
          onChange={e => setMatchName(e.target.value)}
        />
        <select value={selectedTeam1} onChange={handleTeam1Select}>
          <option value="">Select Team 1</option>
          {teams.map(team => selectedTeam2 !== team?.id && (
            <option key={team.id} value={team.id}>
              {team.name}
            </option>
          ))}
        </select>
        <select value={selectedTeam2} onChange={handleTeam2Select}>
          <option value="">Select Team 2</option>
          {teams.map(team => selectedTeam1 !== team.id && (
            <option key={team.id} value={team.id}>
              {team.name}
            </option>
          ))}
        </select>
        <button onClick={handleCreateMatch}>Create Match</button>
      </div>
      <h2>Matches:</h2>
      <ul>
        {matches.map(match => (
          <li key={match.id}>
            <b>{match.name}</b> - {getTeamDataById(match?.team1Id)?.name} vs {getTeamDataById(match?.team2Id)?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchCreationPage;
