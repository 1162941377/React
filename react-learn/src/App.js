import React, { Component } from "react";
// import OldContext from "./OldContext";
import NewContext from "./NewContext";

export default class App extends Component {
  render() {
    return (
      <>
        {/* <OldContext /> */}
        <NewContext />
      </>
    );
  }
}
