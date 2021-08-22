export const SETLOGINUSERTYPE = Symbol("set-login-user");

/**
 * 设置登录用户的 user
 * @param {*} user
 * @returns
 */
export function createSetLoginUserAction(user) {
  return {
    type: SETLOGINUSERTYPE,
    payload: user,
  };
}
