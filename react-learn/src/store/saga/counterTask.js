import { takeEvery, delay, put } from "redux-saga/effects";
import { increase, decrease, actionTypes } from "../action/counter";

function* asyncIncreaseSaga() {
  yield delay(2000);
  yield put(increase());
}

function* asyncDecreaseSaga() {
  yield delay(2000);
  yield put(decrease());
}

export default function* counterTask() {
  yield takeEvery(actionTypes.asyncIncrease, asyncIncreaseSaga);
  yield takeEvery(actionTypes.asyncDecrease, asyncDecreaseSaga);
  console.log("正在监听 asyncIncrease、asyncDecrease");
}
