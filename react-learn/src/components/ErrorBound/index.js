import React, { PureComponent } from "react";

export default class ErrorBound extends PureComponent {
  state = {
    hasError: false,
  };

  static getDerviedStateFromError(err) {
    console.log("发生错误了");
    return {
      hasError: true,
    };
  }

  componentDidCatch(err, info) {
    console.log("记录错误消息");
    console.dir(info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>出现错误了</h1>;
    }
    return this.props.children;
  }
}
