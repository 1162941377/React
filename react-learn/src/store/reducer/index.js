// 创建唯一的reducer
import students from "./student";
import counter from "./counter";
import { combineReducers } from "redux";
import history from "../history";
import { connectRouter } from "connected-react-router";

export default combineReducers({
  students,
  counter,
  router: connectRouter(history),
});
