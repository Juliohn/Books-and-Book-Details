import {takeLatest, call, put, all} from 'redux-saga/effects';
import api from '~/services/api';
import {updateProfile} from './actions';
import {Alert, Platform} from 'react-native';

export function* updateUserTokenDeviceExec({payload}) {
  try {
    const response = yield call(api.post, 'User/UpdateToken', {
      token_device: payload.token_device,
      platform: payload.token_device === null ? null : Platform.OS,
      id: payload.user_id,
      updated_by: payload.user_id,
    });
    //console.tron.log(response.data);
    yield put(updateProfile(response.data.user));
  } catch (err) {
    alert(
      'Ops! parece que tivemos um imprevisto, por favor entre em contato com o administrador do sistema',
    );
  }
}

export default all([
  takeLatest('@user/UPDATE_USER_TOKEN_DEVICE', updateUserTokenDeviceExec),
]);
