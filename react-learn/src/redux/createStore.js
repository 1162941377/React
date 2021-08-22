/**
 * 判断是否是一个平面对象
 * @param {*} obj
 * @returns
 */
function isPlainObject(obj) {
  if (typeof obj !== "object") {
    return false;
  }
  return Object.getPrototypeOf(obj) === Object.prototype;
}

/**
 * 获取一个指定长度的随机字符串
 * @param {*} length
 */
function getRandomString(length) {
  return Math.random().toString(36).substr(2, length).split("").join(".");
}

/**
 * 实现createStore的功能
 * @param {*} redcuer
 * @param {*} defaultStore
 */
export default function createStore(reducer, defaultStore) {
  let currentState = defaultStore,
    currentReducer = reducer;

  const listeners = []; // 存储监听器

  // dispatch分发
  function dispatch(action) {
    // 验证action是否是平面对象
    if (!isPlainObject(action)) {
      throw new TypeError("action must be a plain-object");
    }
    // 验证action是否存在
    if (typeof action === undefined) {
      throw new TypeError("action must has a property of type");
    }
    currentState = currentReducer(currentState, action);
    
    // 如果注册了监听器，依次执行
    for (const listener of listeners) {
      listener();
    }
  }

  // getState获取状态
  function getState() {
    return currentState;
  }

  // subscribe注册监听器
  function subscribe(listener) {
    listeners.push(listener); // 添加监听器
    let isRemove = false; // 用于判断是否移除

    return function () {
      if (isRemove) {
        return;
      }

      // 获取要移除的索引
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
      isRemove = true;
    };
  }

  // 创建仓库时，需要分发一次初始的action
  dispatch({
    type: `@@redux/INIT${getRandomString(6)}`,
  });

  return {
    dispatch,
    getState,
    subscribe,
  };
}
