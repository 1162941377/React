import React, { Component } from "react";
import types from "../../utils/commonTypes";
import withDataGroup from "../HOC/withDataGroup";

export class Option extends Component {
  static propTypes = {
    info: types.singleData.isRequired, // 一个option下拉列表的值
  };

  render() {
    // console.log(this.props);
    return (
      <>
        <option value={this.props.info.value}>{this.props.info.text}</option>
      </>
    );
  }
}

const OptGroup = withDataGroup(Option);

export default class Select extends Component {
  static propTypes = {
    value: types.value.isRequired, // 当前下列列表显示的值
    name: types.name.isRequired,
    onChange: types.onChange,
  };

  handleChange = (e) => {
    let value = e.target.value;
    this.props.onChange && this.props.onChange(value);
  };

  render() {
    // console.log(this.props);
    return (
      <>
        <select
          name={this.props.name}
          value={this.props.value}
          onChange={this.handleChange}
        >
          <OptGroup {...this.props} />
        </select>
      </>
    );
  }
}
