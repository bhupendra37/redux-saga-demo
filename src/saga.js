import { call, put, takeLatest, fork,join,takeEvery,delay } from "redux-saga/effects";
import {
    INCREMENT,
    ASYNC_INCREMENT,
    CALL_FAKE_API,
    RECORD_USER } from "./action";


export function* rootSaga() {
     yield takeEvery(ASYNC_INCREMENT, sagaAsyncIncrement)
    
    yield takeLatest(CALL_FAKE_API, fetchData)
  }
  
  function* sagaAsyncIncrement(payload) {
    const { seconds } = payload
    
     yield delay(seconds * 1000)

    yield put({ type: INCREMENT })
  }
  
  const getUserData = () => {
    return {
      name: 'John Doe',
      gender: 'Male'
    }
  }

  function* fetchData() {
    // const forked = yield fork(testForkJoin);
    // yield delay(1500)

    // const testResult = yield join(forked);
    // console.log('Test Result:', testResult);
    
    const result = yield call(getUserData)
    yield put({ type: RECORD_USER, result })
  }
  
//   function* testForkJoin() {
//     yield delay(1500);
    
//     return 1;
//   }
  