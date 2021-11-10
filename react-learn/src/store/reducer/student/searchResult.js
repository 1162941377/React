import { actionTypes } from "../../action/student/searchResult";

const initialState = {
  datas: [],
  total: 0,
  isLoading: false,
};

/**
 * 控制查询结果的reducer
 * @param {*} state
 * @param {*} param1
 * @returns
 */
export default function searchResult(
  state = initialState, 
  { type, payload }
) {
  switch (type) {
    case actionTypes.setIsLoading:
      return {
        ...state,
        isLoading: payload,
      };
    case actionTypes.setStudentsAndTotal:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
}
