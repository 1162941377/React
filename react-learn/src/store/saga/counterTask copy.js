import { race, call } from "redux-saga/effects";
import { increase, decrease } from "../action/counter";

function asyncAction() {
  const duration = Math.floor(Math.random() * 4000 + 1000);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(increase());
      } else {
        resolve(decrease());
      }
    }, duration);
  });
}

export default function* counterTask() {
  const result = yield race({
    action1: call(asyncAction),
    action2: call(asyncAction),
  });
  console.log(result);
}
