import { getStudents } from "../../services/student";

export const ADDUSER = Symbol("add-user");
export const DELETEUSER = Symbol("delete-user");
export const UPDATEUSER = Symbol("update-user");
export const SETUSERS = Symbol("set-users");
export const SETLOADING = Symbol("set-loading");

export function createAddUserAction(user) {
  return {
    type: ADDUSER,
    payload: user,
  };
}

export function createDeleteUserAction(id) {
  return {
    type: DELETEUSER,
    payload: id,
  };
}

export function createUpdateUserAction(id, newUserData) {
  return {
    type: UPDATEUSER,
    payload: {
      ...newUserData,
      id,
    },
  };
}

export function createSetUsersAction(users) {
  return {
    type: SETUSERS,
    payload: users, // 用户数组
  };
}

export function createSetLoadingAction(isLoading) {
  return {
    type: SETLOADING,
    payload: isLoading, // 是否在加载
  };
}

export function fetchUsers() {
  // 由于thunk的存在，允许action是一个带有副作用的函数
  return async function (dispatch) {
    dispatch(createSetLoadingAction(false));
    const users = await getStudents();
    const action = createSetUsersAction(users);
    dispatch(action);
    dispatch(createSetLoadingAction(true));
  };
}
