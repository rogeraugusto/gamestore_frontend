import { combineReducers } from 'redux';

import login from './login';
import games from './games';

export default combineReducers({
  login,
  games,
});
