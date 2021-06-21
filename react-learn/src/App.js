import React, { Component } from "react";
import { A, B } from "./Cmp";
import withLogin from "./HOC/withLogin";
import withLog from "./HOC/withLog";

let ACmp = withLogin(withLog(A, "zjc"));
let BCmp = withLogin(withLog(B, "wh"));

export default class App extends Component {
  render() {
    return (
      <>
        <ACmp isLogin a={1} />
        <BCmp isLogin b={2} />
        <button
          onClick={() => {
            this.setState({});
          }}
        >
          点击
        </button>
      </>
    );
  }
}
