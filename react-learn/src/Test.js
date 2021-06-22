import React, { Component } from "react";
import Cmp from "./Cmp";
import withLog from "./withLog";

const ACmp = withLog(Cmp);

export default class Test extends Component {
  myRef = React.createRef();

  componentDidMount() {
    console.log(this.myRef);
  }

  render() {
    return (
      <>
        <ACmp ref={this.myRef} age={20} name="zjc" />
      </>
    );
  }
}
