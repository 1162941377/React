import React, { Component } from "react";
import types from "../../utils/commonTypes";
import PropTypes from "prop-types";

export default class index extends Component {
  static defaultProps = {
    datas: [],
    value: "",
  };

  static propTypes = {
    datas: types.groupDatas.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
  };

  handleChange = (e) => {
    this.props.onChange && this.props.onChange(e.target.value);
  };

  // 设置单选框
  getRadio() {
    // console.log(this.props.datas);
    return this.props.datas.map((it) => (
      <label key={it.value}>
        <input
          type="radio"
          name={this.props.name}
          value={it.value}
          checked={this.props.value === it.value}
          onChange={this.handleChange}
        />
        {it.text}
      </label>
    ));
  }

  render() {
    const bs = this.getRadio();

    return <>{bs}</>;
  }
}
