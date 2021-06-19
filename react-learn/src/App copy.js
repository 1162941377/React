import React, { Component } from "react";
import Test from "./Test";

export default class App extends Component {
  state = {
    num: 1,
  };

  render() {
    return (
      <>
        <Test n={this.state.num} />
        <p>
          <button
            onClick={() => {
              this.setState({
                num: this.state.num + 1,
              });
            }}
          >
            父组件状态+1
          </button>
        </p>
      </>
    );
  }
}
