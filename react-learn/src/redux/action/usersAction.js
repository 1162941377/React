export const ADDUSER = Symbol("add-user");
export const DELETEUSER = Symbol("delete-user");
export const UPDATEUSER = Symbol("update-user");

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
