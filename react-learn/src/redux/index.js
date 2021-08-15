import { createStore } from "redux";

// 假设仓库中仅存放了一个数字，该数字的变化可能是 +1 或 -1
// 约定 action 的格式：{ type: "操作类型", payload: 附加数据 }

/**
 * reducer本质上就是一个普通的函数
 * @param {*} state 之前仓库中的状态（数据）
 * @param {*} action 描述要做什么的对象
 * @returns
 */
function reducer(state, action) {
  if (action.type === "increase") {
    return state + 1;
  } else if (action.type === "decrease") {
    return state - 1;
  }
  return state; // 传递了无效的type，不做任何更改
}

// 创建action
const action = {
  type: "decrease",
};

window.store = createStore(reducer, 10); // 创建仓库，传递reducer和默认值

console.log(window.store.getState()); // 获取数据

window.store.dispatch(action); // 分发action

console.log(window.store.getState()); // 获取数据
