/* eslint-disable no-loop-func */
import { fork, take, delay, put, cancel, takeEvery } from "redux-saga/effects";
import { actionTypes, increase } from "../action/counter";

function* stopTask() {
  if (task) {
    yield cancel(task);
  }
}

let task;

function* autoIncrease() {
  while (true) {
    yield take(actionTypes.autoIncrease);
    yield* stopTask();
    task = yield fork(function* () {
      while (true) {
        yield delay(2000);
        yield put(increase());
      }
    });
  }
}

function* stopAutoIncrease() {
  yield* stopTask();
}

export default function* counterTask() {
  yield fork(autoIncrease);
  yield takeEvery(actionTypes.stopAutoIncrease, stopAutoIncrease);
  console.log("正在监听 autoIncrease");
}
