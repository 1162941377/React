import { all } from "redux-saga/effects";
import counterTask from "./counterTask";
import studentTask from "./studentTask";

export default function* index() {
  yield all([counterTask(), studentTask()]);
  console.log("saga完成");
}
