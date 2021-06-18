// 计时器，用作计时
import React, { Component } from "react";

export default class Tick extends Component {
  // 初始化状态，JS Next 语法，目前还处于实验阶段
  state = {
    left: this.props.number,
    n: 123,
  };

  constructor(props) {
    super(props);
    // 初始化状态
    this.timer = setInterval(() => {
      this.setState({
        left: this.state.left - 1,
      }); // 重新设置状态，触发自动的重新渲染
      if (this.state.left === 0) {
        // 停止计时器
        clearInterval(this.timer);
      }
    }, 1000);
  }

  render() {
    return (
      <>
        <h1>剩余倒计时：{this.state.left}</h1>
        <p>{this.state.n}</p>
      </>
    );
  }
}
