import React, { Component } from "react";
import types from "../../utils/commonTypes";
import withDataGroup from "../HOC/withDataGroup";

export class Radio extends Component {
  static propTypes = {
    name: types.name.isRequired,
    value: types.value.isRequired,
    info: types.singleData.isRequired,
    onChange: types.onChange,
  };

  handleChange = (e) => {
    let value = e.target.value;
    this.props.onChange && this.props.onChange(value);
  };

  render() {
    return (
      <>
        <label>
          <input
            type="radio"
            name={this.props.name}
            value={this.props.info.value}
            checked={this.props.value === this.props.info.value}
            onChange={this.handleChange}
          />
          {this.props.info.text}
        </label>
      </>
    );
  }
}

export default withDataGroup(Radio);
