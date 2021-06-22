import React, { Component } from "react";

function A(props, ref) {
  return (
    <>
      <h1 ref={ref}>组件A</h1>
      <span>{props.age}</span>
    </>
  );
}

// 传递函数组件，得到一个新的组件
const NewA = React.forwardRef(A);

export default class Test extends Component {
  ARef = React.createRef();

  componentDidMount() {
    console.log(this.ARef);
  }

  render() {
    return (
      <>
        <NewA ref={this.ARef} age={20} />
      </>
    );
  }
}
