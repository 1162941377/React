import React, { PureComponent, useState } from "react";

class Test extends PureComponent {
  render() {
    console.log("Test render");
    return (
      <>
        <h1>{this.props.text}</h1>
        <button onClick={this.props.onClick}>改变文本</button>
      </>
    );
  }
}

function Parent() {
  console.log("Parent render");
  const [txt, setTxt] = useState(520);
  const [n, setN] = useState(0);
  return (
    <>
      {/* 函数的地址每次渲染都发生了变化，导致了子组件重新渲染，
      若子组件是经过了优化的组件，则可能导致优化失败 */}
      <Test
        text={txt}
        onClick={() => {
          setTxt(Math.random().toFixed(2));
        }}
      />
      <input
        type="number"
        value={n}
        onChange={(e) => {
          setN(e.target.value);
        }}
      />
    </>
  );
}

export default function App() {
  return <Parent />;
}
