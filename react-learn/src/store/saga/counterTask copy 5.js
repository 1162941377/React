import { delay, put, take, cancel, fork } from "redux-saga/effects";
import { actionTypes, increase } from "../action/counter";

function* autoIncrease() {
  let task;
  while (true) {
    yield take(actionTypes.autoIncrease);
    if (task) {
      yield cancel(task);
    }
    task = yield fork(function* () {
      while (true) {
        yield delay(2000);
        yield put(increase());
      }
    });
  }
}
export default function* counterTask() {
  yield fork(autoIncrease);
  console.log("正在监听autoIncrease");
}
