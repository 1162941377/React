import React, { Component } from "react";
// import Test from "./components/SelectGroup/Test";
// import Test from "./components/RadioGroup/Test";
// import Test from "./components/CheckBoxGroup/Test";
// import FuncDefault from "./FuncDefault";
import ClassDefault from "./ClassDefault";

export default class App extends Component {
  render() {
    return (
      <>
        {/* <FuncDefault a={10} b={20} /> */}
        <ClassDefault a={10} b={20} />
      </>
    );
  }
}
