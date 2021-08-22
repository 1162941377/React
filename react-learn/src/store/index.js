import { createStore } from "../redux";
import reducer from "./reducer";
import {
  createAddUserAction,
  createDeleteUserAction,
} from "./action/usersAction";

const store = createStore(reducer);

const unListen = store.subscribe(() => {
  // console.log(1)
  console.log("监听器1", store.getState());
});

store.dispatch(
  createAddUserAction({
    id: 3,
    name: "zjc",
    age: 20,
  })
);

unListen();

store.dispatch(createDeleteUserAction(3));
