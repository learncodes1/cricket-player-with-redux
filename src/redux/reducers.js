import { combineReducers } from 'redux';
import { CLEAR_DATA, ADD_PLAYER, CREATE_TEAM, ASSIGN_PLAYER_TO_TEAM, CREATE_MATCH, ASSIGN_TEAMS_TO_MATCH } from './types';

const playersReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return [...state, action.payload];
    case CLEAR_DATA:
      return [];
    default:
      return state;
  }
};

const teamsReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_TEAM:
      return [...state, action.payload];
    case ASSIGN_PLAYER_TO_TEAM:
      return state.map(team => {
        if (team.players.length < 11 && action.payload.teamId === team.id) {
          console.log(action.payload.playerId)
          return {
            ...team,
            players: action.payload.playerId.length ? action.payload.playerId : []
          };
        }
        return team;
      });
    case CLEAR_DATA:
      return [];
    default:
      return state;
  }
};

const matchesReducer = (state = [], action) => {
  switch (action.type) {
    case ASSIGN_TEAMS_TO_MATCH:
      return [...state, action.payload];
    case CLEAR_DATA:
      return [];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  players: playersReducer,
  teams: teamsReducer,
  matches: matchesReducer
});

export default rootReducer;
