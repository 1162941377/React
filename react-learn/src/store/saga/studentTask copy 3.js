import {
  actionTypes,
  setIsLoading,
  setStudentsAndTotal,
} from "../action/student/searchResult";
import { takeEvery, put } from "redux-saga/effects";
import { searchStudents } from "../../services/student";

function* fetchStudents() {
  // 设置为正在加载中
  yield put(setIsLoading(true));
  // 当saga发现得到的结果是一个promise对象，它会自动等待promise完成
  // 完成之后，会把完成的结果作为值传递给下一次的next
  // 如果promise对象被拒绝，saga会使用generator.throw抛出一个错误
  const resp = yield searchStudents();
  yield put(setStudentsAndTotal(resp.datas, resp.cont));
  yield put(setIsLoading(false));
}

export default function* studentTask() {
  yield takeEvery(actionTypes.fetchStudents, fetchStudents);
  console.log("正在监听 fetchStudents");
}
