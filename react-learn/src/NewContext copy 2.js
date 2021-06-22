import React, { Component } from "react";

const ctx = React.createContext();

class ChildB extends Component {
  static contextType = ctx;

  shouldComponentUpdate() {
    console.log("运行了优化");
    return false;
  }

  render() {
    console.log("ChildB render");
    return (
      <>
        <h1>
          a: {this.context.a} b: {this.context.b}
        </h1>
      </>
    );
  }
}

export default class NewContext extends Component {
  state = {
    ctx: {
      a: 0,
      b: "zjc",
      changeA: (newA) => {
        this.setState({
          a: newA,
        });
      },
    },
  };

  render() {
    return (
      <ctx.Provider value={this.state.ctx}>
        <ChildB />
        <button
          onClick={() => {
            this.setState({});
          }}
        >
          父组件的按钮，a + 1
        </button>
      </ctx.Provider>
    );
  }
}
