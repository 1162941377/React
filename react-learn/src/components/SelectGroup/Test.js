import React, { Component } from "react";
import SelectGroup from "./index";
import { getAllStudents } from "../../services/studentData";

export default class Test extends Component {
  state = { datas: [], value: "" };

  onChange = (target) => {
    // console.log(target);
    this.setState({
      value: target,
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
        <SelectGroup name="loves" {...this.state} onChange={this.onChange} />
      </>
    );
  }
}
