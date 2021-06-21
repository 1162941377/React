import React, { Component } from "react";
import types from "../../utils/commonTypes";
import withDataGroup from "../HOC/withDataGroup";

export class CheckBox extends Component {
  static propTypes = {
    name: types.name.isRequired,
    onChange: types.onChange,
    info: types.singleData.isRequired,
    chooseDatas: types.chooseDatas.isRequired,
  };

  handleChange = (e) => {
    let value = e.target.value;
    let newArr = [];
    if (e.target.checked) {
      newArr = [...this.props.chooseDatas, value];
    } else {
      newArr = this.props.chooseDatas.filter((it) => it !== value);
    }

    this.props.onChange && this.props.onChange(newArr);
  };

  render() {
    return (
      <>
        <label>
          <input
            type="checkbox"
            name={this.props.name}
            value={this.props.info.value}
            checked={this.props.chooseDatas.includes(this.props.info.value)}
            onChange={this.handleChange}
          />
          {this.props.info.text}
        </label>
      </>
    );
  }
}

// 经过高阶组件处理后，得到一组多选框
export default withDataGroup(CheckBox);
