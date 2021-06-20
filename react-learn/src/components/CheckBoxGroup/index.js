import React, { Component } from "react";

export default class index extends Component {
  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let newArr = [];
    if (e.target.checked) {
      newArr = [...this.props.chooseDatas, value];
    } else {
      newArr = this.props.chooseDatas.filter((it) => it !== value);
    }

    this.props.onChange && this.props.onChange(newArr, e, name);
  };

  // 设置多选框
  getCheckBoxs() {
    // console.log(this.props.datas);
    return this.props.datas.map((it) => (
      <label key={it.value}>
        <input
          type="checkbox"
          name={this.props.name}
          value={it.value}
          checked={this.props.chooseDatas.includes(it.value)}
          onChange={this.handleChange}
        />
        {it.text}
      </label>
    ));
  }

  render() {
    const bs = this.getCheckBoxs();

    return <>{bs}</>;
  }
}
