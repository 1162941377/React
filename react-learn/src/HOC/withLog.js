import React, { Component } from "react";

export default function withLog(Cmp, str) {
  return class LogWrapper extends Component {
    componentDidMount() {
      console.log(`日志：组件${Cmp.name}被创建了！${Date.now()}`);
    }

    componentWillUnmount() {
      console.log(`日志：组件${Cmp.name}即将被销毁！${Date.now()}`);
    }

    render() {
      return (
        <>
          <h1>{str}</h1>
          <Cmp {...this.props} />
        </>
      );
    }
  };
}
