import React from "react";
import ReactDOM from "react-dom";

function ChildA() {
  return ReactDOM.createPortal(
    <div
      className="child-a"
      style={{
        marginTop: 20,
      }}
    >
      <h1>ChilA</h1>
      <ChildB />
    </div>,
    document.querySelector(".modal")
  );
}

function ChildB() {
  return (
    <div className="child-b">
      <h1>ChildB</h1>
    </div>
  );
}

export default function Test() {
  return (
    <div
      className="container-test"
      onClick={() => {
        console.log("Test-container被点击了");
      }}
    >
      <h1>Test-Container</h1>
      <ChildA />
    </div>
  );
}
