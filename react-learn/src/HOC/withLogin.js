import React from "react";

export default function withLogin(Cmp) {
  return function LoginWrapper(props) {
    if (props.isLogin) {
      return <Cmp {...props} />;
    }
    return null;
  };
}
