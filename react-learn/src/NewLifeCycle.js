import React, { Component } from "react";

export default class NewLifeCycle extends Component {
  state = {
    n: this.props.n,
  };

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps", props, state);
    return null;
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("getSnapshotBeforeUpdate", prevProps, prevState);
    return 520;
  };

  componentDidUpdate(prevProps, prevState, snap) {
    console.log("componentDidUpdate", prevProps, prevState, snap);
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      <>
        <h1>{this.state.n}</h1>
        <p>
          <button
            onClick={() => {
              this.setState({
                n: this.state.n + 1,
              });
            }}
          >
            + 1
          </button>
        </p>
      </>
    );
  }
}
