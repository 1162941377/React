import React, { Component } from "react";
import reset from "./resetScroll";

export default function withScroll(Cmp) {
  return class ScrollWrapper extends Component {
    componentDidMount() {
      reset();
    }

    render() {
      return <Cmp {...this.props} />;
    }
  };
}
