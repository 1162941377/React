import React from "react";
import loginInfo from "./loginInfo";

export default function Login(props) {
  return (
    <>
      <h1>登录授权页</h1>
      <p>该页仅做测试，点击下方按钮即可登录</p>
      <button
        onClick={() => {
          loginInfo.login();
          if (props.location.state) {
            props.history.push(props.location.state);
          } else {
            props.history.push("/");
          }
        }}
      >登录</button>
    </>
  );
}
