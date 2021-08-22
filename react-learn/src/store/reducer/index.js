import loginUser from "./loginUser";
import user from "./user";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
  const newState = {
    loginUser: loginUser(state.loginUser, action),
    user: user(state.user, action),
  };

  return newState;
};
