import isPlainObject from "./utils/isPlainObject";
import ActionTypes from "./utils/actionTypes";

export default function combineReducers(reducers) {
  // 1. 验证
  validateReducers(reducers);
  // 2. 返回一个reducer函数
  return function (state = {}, action) {
    const newState = {};
    for (const key in reducers) {
      if (Object.hasOwnProperty.call(reducers, key)) {
        const reducer = reducers[key];
        newState[key] = reducer(state[key], action);
      }
    }
    return newState;
  };
}

/**
 * 验证reducer是否符合条件
 * @param {*} reducers
 */
function validateReducers(reducers) {
  if (typeof reducers !== "object") {
    // 是否不是object
    throw new TypeError("reducers must be an object");
  } else if (!isPlainObject(reducers)) {
    // 是否不是平面对象
    throw new TypeError("reducers must be an plain-object");
  } else {
    // 是否是undefined
    for (const key in reducers) {
      if (Object.hasOwnProperty.call(reducers, key)) {
        const reducer = reducers[key];
        let state = reducer(undefined, {
          type: ActionTypes.INIT,
        });
        if (state === undefined) {
          throw new TypeError("reducers must not return undefined");
        }
        state = reducer(undefined, {
          type: ActionTypes.UNKNOWN,
        });
        if (state === undefined) {
          throw new TypeError("reducers must not return undefined");
        }
      }
    }
  }
}
