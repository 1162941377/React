import React, { Component } from "react";

export default class App extends Component {
  static childContextTypes = {};

  getChildContext() {
    return {};
  }

  constructor(props) {
    super(props);
    setTimeout(() => {
      console.log(0);
    }, 0);
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  render() {
    return <div ref="div">div</div>;
  }
}
