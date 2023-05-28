import { v4 as uuidv4 } from 'uuid';
import { CLEAR_DATA, ADD_PLAYER, CREATE_TEAM, ASSIGN_PLAYER_TO_TEAM, CREATE_MATCH, ASSIGN_TEAMS_TO_MATCH } from './types';

export const clearData = () => ({
  type: CLEAR_DATA
});

export const addPlayer = playerName => ({
  type: ADD_PLAYER,
  payload: {
    id: uuidv4(),
    name: playerName
  }
});

export const createTeam = teamName => ({
  type: CREATE_TEAM,
  payload: {
    id: uuidv4(),
    name: teamName,
    players: []
  }
});

export const assignPlayerToTeam = (playerId, teamId) => ({
  type: ASSIGN_PLAYER_TO_TEAM,
  payload: {
    teamId,
    playerId
  }
});

export const createMatch = () => ({
  type: CREATE_MATCH,
  payload: {
    id: uuidv4(),
    team1: null,
    team2: null,
    status: 'Not Ready'
  }
});

export const assignTeamsToMatch = (team1Id, team2Id, name) => ({
  type: ASSIGN_TEAMS_TO_MATCH,
  payload: {
    id: uuidv4(),
    name,
    team1Id,
    team2Id,
    status: 'Ready'
  }
});
