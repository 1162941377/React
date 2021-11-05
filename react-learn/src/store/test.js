import store from "./index";
import {
  increase,
  decrease,
  asyncIncrease,
  asyncDecrease,
  add,
} from "./action/counter";
import { fetchStudents } from "./action/student/searchResult";

window.increase = function () {
  store.dispatch(increase());
};

window.decrease = function () {
  store.dispatch(decrease());
};

window.asyncIncrease = function () {
  store.dispatch(asyncIncrease());
};

window.asyncDecrease = function () {
  store.dispatch(asyncDecrease());
};

window.fetchStudens = function () {
  store.dispatch(fetchStudents());
};

window.add = function (n) {
  store.dispatch(add(n));
};
