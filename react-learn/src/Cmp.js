import React, { Component } from "react";

export default class Cmp extends Component {
  render() {
    // console.log(this.props);
    return (
      <>
        <h1>姓名: {this.props.name}</h1>
        <span>年龄：{this.props.age}</span>
      </>
    );
  }
}
