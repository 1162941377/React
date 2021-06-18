import React, { Component } from "react";

export default class A extends Component {
  state = {
    n: 123,
  };

  constructor(props) {
    super(props);
    setInterval(() => {
      this.setState({
        n: this.state.n - 1,
      });
    }, 1000);
  }

  // 单向数据流的完美体现：
  render() {
    console.log("A组件重新渲染了");
    return (
      <>
        <B n={this.state.n} />
      </>
    );
  }
}

function B(props) {
  return (
    <>
      B组件：{props.n}
      <p>
        <C n={props.n} />
      </p>
    </>
  );
}

function C(props) {
  return <>C组件：{props.n}</>;
}
