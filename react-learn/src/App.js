import React, { Component } from "react";
import OldLifeCycle from "./OldLifeCycle";

export default class App extends Component {
  state = {
    number: 1,
    show: true,
  };

  render() {
    const cmp = this.state.show ? <OldLifeCycle n={this.state.number} /> : null;
    return (
      <>
        {cmp}
        <button
          onClick={() => {
            this.setState((state) => ({
              number: state.number + 1,
            }));
          }}
        >
          n加1
        </button>
        <button
          onClick={() => {
            this.setState({
              show: !this.state.show,
            });
          }}
        >
          显示与隐藏
        </button>
      </>
    );
  }
}
