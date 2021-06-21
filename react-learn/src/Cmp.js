import React, { Component } from "react";

export default class Cmp extends Component {
  state = {
    show: true,
  };

  handleClick = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  componentDidMount() {
    console.log("componentDidMount", this.txt);
  }

  getRef = (el) => {
    console.log("函数被调用了", el);
    this.txt = el;
  };

  render() {
    return (
      <>
        {this.state.show && <input type="text" ref={this.getRef} />}
        <button onClick={this.handleClick}>显示/隐藏</button>
      </>
    );
  }
}
