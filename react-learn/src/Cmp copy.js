import React, { Component } from "react";

export default class Cmp extends Component {
  constructor(props) {
    super(props);
    this.txt = React.createRef();
  }

  handleClick = () => {
    this.txt.current.focus();
  };

  render() {
    return (
      <>
        <input ref={this.txt} type="text" />
        <button onClick={this.handleClick}>聚焦</button>
      </>
    );
  }
}
