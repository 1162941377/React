import React, { Component } from "react";
import FadeTransition from "./components/FadeTransition";
import { SwitchTransition } from "react-transition-group";

export default class App extends Component {
  state = {
    show: true,
  };

  render() {
    return (
      <>
        <SwitchTransition>
          <FadeTransition appear timeout={800} key={this.state.show}>
            <h1>{this.state.show ? "显示" : "隐藏"}</h1>
          </FadeTransition>
        </SwitchTransition>
        <button
          onClick={() => {
            this.setState({
              show: !this.state.show,
            });
          }}
        >
          切换状态
        </button>
      </>
    );
  }
}
