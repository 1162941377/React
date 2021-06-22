import React, { Component } from "react";
import PropTypes from "prop-types";

const types = {
  a: PropTypes.number,
  b: PropTypes.string.isRequired,
  onChangeA: PropTypes.func,
};

class ChildA extends Component {
  static contextTypes = types;

  static childContextTypes = {
    a: PropTypes.number,
    c: PropTypes.string,
  };

  getChildContext() {
    return {
      a: 530,
      c: "hello",
    };
  }

  render() {
    return (
      <>
        <h1>ChildA</h1>
        <h2>
          a: {this.context.a} b: {this.context.b}
        </h2>
        <ChildB />
      </>
    );
  }
}

class ChildB extends Component {
  static contextTypes = {
    ...types,
    c: PropTypes.string,
  };

  render() {
    return (
      <>
        <p>
          ChildB来自于上下文的数据 a: {this.context.a} b: {this.context.b} c:{" "}
          {this.context.c}
        </p>
        <button
          onClick={() => {
            this.context.onChangeA &&
              this.context.onChangeA(this.context.a + 2);
          }}
        >
          子组件的按钮，a + 2
        </button>
      </>
    );
  }
}

export default class OldContext extends Component {
  static childContextTypes = types;

  state = {
    a: 123,
    b: "zjc",
  };

  getChildContext() {
    console.log("获取新的上下文");
    return {
      a: this.state.a,
      b: this.state.b,
      onChangeA: (newA) => {
        this.setState({
          a: newA,
        });
      },
    };
  }

  render() {
    return (
      <>
        <ChildA />
        <button
          onClick={() => {
            this.setState({
              a: this.state.a + 1,
            });
          }}
        >
          父组件的按钮，a + 1
        </button>
      </>
    );
  }
}
