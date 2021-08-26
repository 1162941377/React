import { createStore, bindActionCreators } from "../redux";
import reducer from "./reducer";
import {
  createAddUserAction,
  createDeleteUserAction,
} from "./action/usersAction";

const store = createStore(reducer);
const oldDispatch = store.dispatch; // 保存之前的dispatch

store.dispatch = function (action) {
  console.log("中间件1");
  console.log("旧数据", store.getState());
  console.log("action", action);
  oldDispatch(action); // 分发action
  console.log("新数据", store.getState());
  console.log("");
};

store.dispatch = function (action) {
  console.log("中间件2");
  console.log("旧数据", store.getState());
  console.log("action", action);
  oldDispatch(action); // 分发action
  console.log("新数据", store.getState());
  console.log("");
};

const actionCreators = {
  addUser: createAddUserAction,
  deleteUser: createDeleteUserAction,
};

const actions = bindActionCreators(actionCreators, store.dispatch);

actions.addUser({ id: 3, name: "zjc", age: 20 });
actions.deleteUser(3);
