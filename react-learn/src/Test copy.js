import React, { Component } from "react";

class A extends Component {
  render() {
    return (
      <>
        <h1 ref={this.props.name}>组件A</h1>
        <span>{this.props.age}</span>
      </>
    );
  }
}

const NewA = React.forwardRef((props, ref) => {
  return <A {...props} name={ref} />;
});

export default class Test extends Component {
  ARef = React.createRef();

  componentDidMount() {
    console.log(this.ARef);
  }

  render() {
    return (
      <>
        <NewA ref={this.ARef} />
      </>
    );
  }
}
