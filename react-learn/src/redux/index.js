import { createStore, bindActionCreators } from "redux";
import * as actionTypes from "./action/action-types";
import * as numberActions from "./action/number-action";

/**
 * reducer 本质是一个函数
 * @param {*} state 之前仓库中的状态（数据）
 * @param {*} action 描述要做什么的对象
 * @returns
 */
function reducer(state, action) {
  if (action.type === actionTypes.INCREASE) {
    return state + 1;
  } else if (action.type === actionTypes.DECREASE) {
    return state - 1;
  } else if (action.type === actionTypes.SET) {
    return action.payload;
  }
  return state;
}

const store = createStore(reducer, 10);

const bindActions = bindActionCreators(numberActions, store.dispatch);

// 得到一个 increase actinon，并直接分发
bindActions.getIncreaseAction(); // 向仓库分发 action

console.log(store.getState()); // 得到仓库中的值

bindActions.getSetAction(3); // 设置一个新的状态

console.log(store.getState()); // 得到仓库中的值
