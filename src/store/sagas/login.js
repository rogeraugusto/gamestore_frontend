import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { signIn } from '../../services/auth';

import { Creators as LoginActions } from '../ducks/login';

export function* login(action) {
  try {
    const { email, password, history } = action.payload;
    const { data } = yield call(api.post, '/sessions', { email, password });

    const userdata = {
      id: data.user._id,
      name: data.user.name,
    };

    signIn(data.token, userdata);
    yield put(LoginActions.loginSuccess());

    history.push('/main');
  } catch (err) {
    yield put(LoginActions.loginFailure('Erro ao logar, verifique suas credenciais'));
  }
}
