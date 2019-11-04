import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as GamesActions } from '../ducks/games';

export function* loadGames() {
  try {
    const response = yield call(api.get, '/games');

    yield put(GamesActions.loadGamesSuccess(response.data));
  } catch (err) {
    yield put(GamesActions.loadGamesFailure());
  }
}
