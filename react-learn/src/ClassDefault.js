import React, { Component } from "react";

export default class ClassDefault extends Component {
  static defaultProps = {
    a: 1,
    b: 2,
    c: 3,
  };

  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <>
        <h1>
          a: {this.props.a}，b：{this.props.b}，c：{this.props.c}
        </h1>
      </>
    );
  }
}

/* // 另一种写法
ClassDefault.defaultProps = {
  a: 1,
  b: 2,
  c: 3,
}; */
