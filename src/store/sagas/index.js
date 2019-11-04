import { all, takeLatest } from 'redux-saga/effects';

import { Types as LoginTypes } from '../ducks/login';
import { Types as GamesTypes } from '../ducks/games';
import { login } from './login';
import { loadGames } from './games';

export default function* rootSaga() {
  yield all([
    takeLatest(LoginTypes.LOGIN_REQUEST, login),
    takeLatest(GamesTypes.LOAD_GAME_REQUEST, loadGames),
  ]);
}
