import { all } from 'redux-saga/effects';
import { getSignInAdmin } from '../services/auth'

function *getSignIn(action) {
  try {
    console.log('1', action)
    const result = yield call(getSignInAdmin);
    console.log('2', result)
  } catch (err) {
    notifyError(err.response.data.msg);
  }
}


export default function *authWatcher() {
  yield all([
    takeEvery(ACTION_SIGN_IN, getSignIn)
  ])
}
