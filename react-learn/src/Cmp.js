import React, { Component } from "react";

export default class Cmp extends Component {
  state = {
    n: 0,
  };

  handleClick = () => {
    this.setState(
      (cur) => {
        return {
          n: cur.n + 1,
        };
      },
      () => {
        // 对于异步的setState函数的调用
        // React会进行合并优化处理，最后才改变状态
        console.log(this.state.n);
      }
    );
    
    this.setState((cur) => {
      return {
        n: cur.n + 1,
      };
    });

    this.setState((cur) => {
      return {
        n: cur.n + 1,
      };
    });
  };

  render() {
    console.log("render");

    return (
      <>
        <h1>{this.state.n}</h1>
        <p>
          <button onClick={this.handleClick}>+</button>
        </p>
      </>
    );
  }
}
