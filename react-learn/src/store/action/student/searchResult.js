/**
 * 对学生查询结果改变的action的类型
 */
export const actionTypes = {
  setStudentsAndTotal: Symbol("set-student-and-toal"),
  setIsLoading: Symbol("set-is-loading"),
  fetchStudents: Symbol("fetchStudents"),
};

/**
 * 根据新的查询条件，产生一个action
 * @param {Array} arr
 * @param {Number} total
 */
export function setStudentsAndTotal(arr, total) {
  return {
    type: actionTypes.setStudentsAndTotal,
    payload: {
      datas: arr,
      total,
    },
  };
}

/**
 * 得到一个设置是否正在加载的action
 * @param {Boolean} isLoading
 * @returns
 */
export function setIsLoading(isLoading) {
  return {
    type: actionTypes.setIsLoading,
    payload: isLoading,
  };
}

/**
 * 根据当前仓库中的查询条件，查询学生
 * @returns
 */
export function fetchStudents() {
  return { type: actionTypes.fetchStudents };
}
