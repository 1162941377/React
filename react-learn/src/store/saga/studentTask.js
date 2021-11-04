import {
  actionTypes,
  setIsLoading,
  setStudentsAndTotal,
} from "../action/student/searchResult";
import { takeEvery, put, select, cps } from "redux-saga/effects";

function mockStudents(condition, callback) {
  console.log("mockStudents", condition);
  setTimeout(() => {
    if (Math.random() > 0.5) {
      // nodejs风格
      callback(null, {
        cont: 78,
        datas: [
          { id: 1, name: "zjc" },
          { id: 2, name: "wh" },
        ],
      });
    } else {
      callback(new Error("出错了！！！"), null);
    }
  }, 1000);
}

function* fetchStudents() {
  // 设置为正在加载中
  yield put(setIsLoading(true));
  const condition = yield select((state) => state.students.condition);
  try {
    const resp = yield cps(mockStudents, condition);
    yield put(setStudentsAndTotal(resp.datas, resp.cont));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setIsLoading(false));
  }
}

export default function* studentTask() {
  yield takeEvery(actionTypes.fetchStudents, fetchStudents);
  console.log("正在监听 fetchStudents");
}
