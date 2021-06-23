import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "./formContext";

export default class FormInput extends Component {
  static defaultProps = {
    type: "text",
  };

  static propTypes = {
    types: PropTypes.string,
    name: PropTypes.string.isRequired,
  };

  render() {
    return (
      <Consumer>
        {(val) => {
          return (
            <input
              type={this.props.type}
              value={val.formDatas[this.props.name] || ""}
              onChange={(e) => {
                // console.log(e.target.value)
                val.onChangeData(this.props.name, e.target.value);
              }}
            />
          );
        }}
      </Consumer>
    );
  }
}
