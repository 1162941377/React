import * as actionTypes from "./action-types";

export function getIncreaseAction() {
  return {
    type: actionTypes.INCREASE,
  };
}

export function getDecreaseAction() {
  return {
    type: actionTypes.DECREASE,
  };
}

export function getSetAction(newNumber) {
  return {
    type: actionTypes.SET,
    payload: newNumber,
  };
}
