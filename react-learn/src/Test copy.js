import React, { Component } from "react";

class Cmp1 extends Component {
  state = {};

  constructor(props) {
    super(props);
    console.log(4, "Cmp Constructor");
  }

  static getDerivedStateFromProps() {
    console.log(5, "Cmp1 getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("b", "Cmp1 componentDidMount");
  }

  render() {
    console.log(6, "Cmp1 render");
    return <h1>Cmp1</h1>;
  }
}

export default class Test extends Component {
  state = {};

  constructor(props) {
    super(props);
    console.log(1, "Test Constructor");
  }

  static getDerivedStateFromProps() {
    console.log(2, "Test getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("a", "Test componentDidMount");
  }

  render() {
    console.log(3, "Test render");
    return <Cmp1 />;
  }
}
