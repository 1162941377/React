import React, { Component } from "react";
import CheckBoxGroup from "./index";
import { getAllStudents } from "../../services/studentData";

export default class Test extends Component {
  state = { datas: [], chooseDatas: [] };

  onChange = (newArr) => {
    // console.log(newArr);
    this.setState({
      chooseDatas: newArr,
    });
  };

  async componentDidMount() {
    const stus = await getAllStudents();
    this.setState({
      datas: stus.map((it) => ({
        value: it.id.toString(),
        text: it.name,
      })),
    });
  }

  render() {
    return (
      <>
        <CheckBoxGroup name="loves" {...this.state} onChange={this.onChange} />
      </>
    );
  }
}
