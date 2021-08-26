import { createStore, bindActionCreators, applyMiddleware } from "redux";
import reducer from "./reducer";
import {
  createAddUserAction,
  createDeleteUserAction,
} from "./action/usersAction";

const logger1 = (store) => (next) => (action) => {
  console.log("中间件1");
  console.log("旧数据", store.getState());
  console.log("action", action);
  next(action);
  console.log("新数据", store.getState());
  console.log("");
};

const logger2 = (store) => (next) => (action) => {
  console.log("中间件2");
  console.log("旧数据", store.getState());
  console.log("action", action);
  next(action);
  console.log("新数据", store.getState());
  console.log("");
};

const store = createStore(reducer, applyMiddleware(logger1, logger2));

const actionCreators = {
  addUser: createAddUserAction,
  deleteUser: createDeleteUserAction,
};

const actions = bindActionCreators(actionCreators, store.dispatch);

actions.addUser({ id: 3, name: "zjc", age: 20 });
actions.deleteUser(3);

// function logger1(store) {
//   return function (next) {
//     return function (action) {
//       console.log("中间件1");
//       console.log("旧数据", store.getState());
//       console.log("action", action);
//       next(action);
//       console.log("新数据", store.getState());
//       console.log("");
//     };
//   };
// }

// function logger2(store) {
//   return function (next) {
//     return function (action) {
//       console.log("中间件2");
//       console.log("旧数据", store.getState());
//       console.log("action", action);
//       next(action);
//       console.log("新数据", store.getState());
//       console.log("");
//     };
//   };
// }
