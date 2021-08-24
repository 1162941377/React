import { createStore, bindActionCreators } from "redux";
import reducer from "./reducer";
import {
  createAddUserAction,
  createDeleteUserAction,
} from "./action/usersAction";

const store = createStore(reducer);

const actionCreators = {
  addUser: createAddUserAction,
  deleteUser: createDeleteUserAction,
};

const actions = bindActionCreators(actionCreators, store.dispatch);

store.subscribe(() => {
  console.log("监听器1", store.getState());
});

actions.addUser({ id: 3, name: "zjc", age: 20 });
actions.deleteUser(3);
