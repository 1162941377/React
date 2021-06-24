import React, { Component } from "react";
import Task from "./Task";
import AddTask from "./AddTask";

export default class TaskList extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const ts = [];
    for (let i = 1; i <= 10; i++) {
      ts.push(i);
    }
    this.setState({
      data: ts,
    });
  }

  changeData = (value) => {
    this.setState({
      data: [...this.state.data, value],
    });
    // console.log(this.state.data);
  };

  render() {
    console.log("TaskList render run");
    return (
      <>
        <AddTask changeData={this.changeData} />
        <Task data={this.state.data} />
      </>
    );
  }
}
