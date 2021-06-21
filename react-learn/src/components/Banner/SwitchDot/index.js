import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

export default class SwitchDot extends Component {
  static propsTypes = {
    onChange: PropTypes.func,
    total: PropTypes.number.isRequired, // 一共的小圆点数
    curIndex: PropTypes.number.isRequired, // 当前选中的下标
  };

  render() {
    const spans = [];

    for (let i = 0; i < this.props.total; i++) {
      spans.push(
        <span
          key={i}
          className={i === this.props.curIndex ? "active" : ""}
          onClick={() => {
            this.props.onChange && this.props.onChange(i);
          }}
        ></span>
      );
    }

    return (
      <>
        <div className="dots">{spans}</div>
      </>
    );
  }
}
