import uuid from "uuid";
import { createStore } from "redux";
import reducer from "./reducer";
import { createAddUserAction } from "./action/usersAction";
import { createSetLoginUserAction } from "./action/loginUserAction";

const store = createStore(reducer);

console.log(store.getState());

store.dispatch(
  createAddUserAction({
    id: uuid(),
    name: "abc",
    age: 10,
  })
);

console.log(store.getState());

store.dispatch(createSetLoginUserAction("zjc"));

console.log(store.getState());
