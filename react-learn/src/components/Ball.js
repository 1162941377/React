// 这是创建小球的组件
import React, { Component } from "react";
import "./Ball.css";

export default class Ball extends Component {
  constructor(props) {
    super(props);

    // 分别传递横纵坐标和横纵速度，背景颜色
    this.state = {
      left: props.left || 0,
      top: props.top || 0,
      xSpeed: props.xSpeed,
      ySpeed: props.ySpeed,
    };

    const duration = 16; // 计时器的秒数

    this.timer = setInterval(() => {
      let newLeft = this.state.left + (this.state.xSpeed * duration) / 1000; // x轴方向上的位移
      let newTop = this.state.top + (this.state.ySpeed * duration) / 1000; // y轴方向上的位移

      if (newLeft <= 0) {
        newLeft = 0;
        this.setState({
          xSpeed: -this.state.xSpeed,
        });
      } else if (newLeft >= document.documentElement.clientWidth - 100) {
        newLeft = document.documentElement.clientWidth - 100;
        this.setState({
          xSpeed: -this.state.xSpeed,
        });
      } else if (newTop <= 0) {
        newTop = 0;
        this.setState({
          ySpeed: -this.state.ySpeed,
        });
      } else if (newTop >= document.documentElement.clientHeight - 100) {
        newTop = document.documentElement.clientHeight - 100;
        this.setState({
          ySpeed: -this.state.ySpeed,
        });
      }

      this.setState({
        left: newLeft,
        top: newTop,
      });
    }, duration);
  }

  render() {
    return (
      <div
        className="ball"
        style={{
          left: this.state.left,
          top: this.state.top,
          background: this.props.bg || "#f40",
        }}
      ></div>
    );
  }
}
