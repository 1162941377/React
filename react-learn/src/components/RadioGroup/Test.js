import React, { Component } from "react";
import RadioGroup from "./index";
import { getAllStudents } from "../../services/studentData";

export default class Test extends Component {
  state = {
    // datas: [
    //   { value: "football", text: "足球" },
    //   { value: "basketball", text: "篮球" },
    //   { value: "movie", text: "电影" },
    //   { value: "music", text: "音乐" },
    //   { value: "other", text: "其它" },
    // ],
    datas: [],
    name: "loves",
    value: "",
  };

  onChange = (target) => {
    console.log(target);
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
        <RadioGroup {...this.state} onChange={this.onChange} />
      </>
    );
  }
}
