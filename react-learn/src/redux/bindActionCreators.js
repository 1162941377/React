/**
 * 手写bindActionCreators的功能
 * @param {*} actionCreators
 * @param {*} dispatch
 * @returns
 */
export default function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === "function") {
    return getAutoDispatchActionCreator(actionCreators, dispatch);
  } else if (typeof actionCreators === "object") {
    const result = {};
    for (const key in actionCreators) {
      if (Object.hasOwnProperty.call(actionCreators, key)) {
        const actionCreator = actionCreators[key];
        if (typeof actionCreator === "function") {
          result[key] = getAutoDispatchActionCreator(actionCreator, dispatch);
        }
      }
    }
    return result;
  } else {
    throw new TypeError(
      "actionCreators must be an object or function which means action creator"
    );
  }
}

/**
 * 得到一个自动分发的action creator
 * @param {*} actionCreator
 * @param {*} dispatch
 * @returns
 */
function getAutoDispatchActionCreator(actionCreator, dispatch) {
  return function (...args) {
    const action = actionCreator(...args);
    dispatch(action);
  };
}
