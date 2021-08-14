import React, { Component } from "react";

export default class Page2 extends Component {
  state = {
    val: "",
  };

  hanldeBlock(value) {
    if (value) {
      // 添加阻塞
      this.unBlock = this.props.history.block(
        "切换页面将导致文本无法保留，是否要切换？"
      );
    } else {
      this.unBlock && this.unBlock();
    }
  }

  componentWillUnmount() {
    this.unBlock && this.unBlock();
  }

  render() {
    return (
      <textarea
        value={this.state.val}
        onChange={(e) => {
          this.setState({
            val: e.target.value,
          });
          this.hanldeBlock(e.target.value);
        }}
      />
    );
  }
}
