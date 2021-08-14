import React, { Component } from "react";
import Prompt from "./Prompt";

export default class Page2 extends Component {
  state = {
    val: "",
  };

  render() {
    return (
      <>
        <Prompt
          when={this.state.val !== ""}
          message="别乱来，会导致数据丢失，真的要跳转吗？"
        />
        <textarea
          value={this.state.value}
          onChange={(e) => {
            this.setState({
              val: e.target.value,
            });
          }}
        />
      </>
    );
  }
}
