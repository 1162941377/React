import React, { Component } from "react";

export default class index extends Component {
  handleChange = (e) => {
    this.props.onChange && this.props.onChange(e.target.value);
  };

  // 设置单选框
  getSelect() {
    // console.log(this.props.datas);
    return this.props.datas.map((it) => (
      <option value={it.value} key={it.value}>
        {it.text}
      </option>
    ));
  }

  render() {
    const options = this.getSelect();

    return (
      <>
        <select
          name={this.props.name}
          value={this.props.value}
          onChange={this.handleChange}
        >
          {options}
        </select>
      </>
    );
  }
}
