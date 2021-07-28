import React, { PureComponent, useRef } from "react";

class Test extends PureComponent {
  method() {
    console.log("Test Method Called");
  }

  render() {
    return <h1>Test Render</h1>;
  }
}

export default function App() {
  const testRef = useRef();
  return (
    <>
      <Test ref={testRef} />
      <button
        onClick={() => {
          testRef.current.method();
        }}
      >
        调用了Test组件的method方法
      </button>
    </>
  );
}
