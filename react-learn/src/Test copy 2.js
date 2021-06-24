import React, { PureComponent } from "react";

export default class Test extends PureComponent {
  state = {
    data: "zjc",
  };

  render() {
    console.log("render 运行了");
    return (
      <>
        <p>{this.state.data}</p>
        <button
          onClick={() => {
            this.setState({});
          }}
        >
          click
        </button>
      </>
    );
  }
}
