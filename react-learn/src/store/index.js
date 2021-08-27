import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer"
import logger from "redux-logger";
import thunk from "redux-thunk";

/**
 * thunk：
 * 当 applyMiddleware 应用了该中间件，
 * 允许 action 带有副作用，
 * 返回的是一个函数，
 * 如果该函数内部没有使用 dispatch，
 * 那么不会进行下一个中间件的传递
 * 也就是说 thunk 会阻碍中间件的传递，
 * 
 * 有三个参数：
 * 1. dispatch
 * 2. getState
 * 3. extra（ thunk.withExtraArgument ）
 */

export default createStore(reducer,
  applyMiddleware(
    thunk,
    logger
  )
)
