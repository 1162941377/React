/* eslint {import/no-anonymous-default-export: "off"} */
export default {
  isLogin: false,
  login() {
    this.isLogin = true;
  },
  loginOut() {
    this.isLogin = false;
  },
};
