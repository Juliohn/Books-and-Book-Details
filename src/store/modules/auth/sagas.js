import {takeLatest, call, put, all} from 'redux-saga/effects';
import api from '~/services/api';
import {signInSuccess, signInFailure, signOutSuccess} from './actions';
import {Alert} from 'react-native';

export function* signIn({payload}) {
  try {
    const {email, password} = payload;

    const response = yield call(api.post, '/auth/sign-in', {email, password});        
    const authorization = response.headers.authorization;        
    const user = response.data

    //console.tron.log(authorization);
    
    api.defaults.headers.Authorization = `Bearer ${authorization}`;
    yield put(signInSuccess(authorization, user));
  } catch (err) {
    Alert.alert(
      'Falha no Login',
      'Houve um erro ao tentar realizar o Login, verifique os dados por favor.',
    );
    yield put(signInFailure());
  }
}

export function* signOut({payload}) {
  try {    
    const access_token = null;
    api.defaults.headers.Authorization = `Bearer ${access_token}`;
    yield put(signOutSuccess(access_token, []));
  } catch (err) {
    Alert.alert(
      'Falha no Logout',
      'Houve um erro ao tentar realizar o Logout, avise o gestor do sistema.',
    );
    yield put(signInFailure());
  }
}

export function setToken({payload}) {
  if (!payload) {
    return;
  }

  const {token} = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}
export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT_REQUEST', signOut),
]);
