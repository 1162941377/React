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
  datas = [
    {
      a: 0,
      b: "zjc",
      changeA: (newA) => {
        this.setState({
          a: newA,
        });
      },
    },
  ];

  state = this.datas[0];

  render() {
    return (
      <ctx.Provider value={{ ...this.state }}>
        <ChildB />
        <button
          onClick={() => {
            this.setState({}, () => {
              console.log(this.datas[0] === this.datas[1]);
            });
          }}
        >
          父组件的按钮，a + 1
        </button>
      </ctx.Provider>
    );
  }
}
