import React, { Component } from "react";
import PropTypes from "prop-types";
import { Provider } from "./formContext";
import FormInput from "./FormInput";
import FormButton from "./FormButton";

export default class Form extends Component {
  static propTypes = {
    onSumbit: PropTypes.func,
  };

  state = {
    formDatas: {}, // 表单数据
    onChangeData: (name, val) => {
      // console.log([name], val);
      this.setState({
        formDatas: {
          ...this.state.formDatas,
          [name]: val,
        },
      });
    },
    onSubmit: () => {
      this.props.onSubmit && this.props.onSubmit(this.state.formDatas);
      // console.log(1);
    },
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

Form.Input = FormInput;
Form.Button = FormButton;
