import React, { Component } from "react";

class A extends Component {
  method() {
    console.log("调用了组件A的方法");
  }

  render() {
    return (
      <>
        <h1>组件A</h1>
      </>
    );
  }
}

/* // 函数组件无法使用ref
function B() {
  return (
    <>
      <h1>组件B</h1>
    </>
  );
} */

export default class Cmp extends Component {
  handleClick = () => {
    console.log(this);
    this.refs.txt.focus();
    this.refs.cmpA.method();
  };

  render() {
    return (
      <>
        <input type="text" ref="txt" />
        <A ref="cmpA" />
        <button onClick={this.handleClick}>聚焦</button>
      </>
    );
  }
}
