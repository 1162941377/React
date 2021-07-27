import React, { PureComponent, useMemo, useState } from "react";

class Test extends PureComponent {
  render() {
    console.log("Test Render");
    return (
      <>
        <h1>{this.props.text}</h1>
        <button onClick={this.props.onClick}>改变文本</button>
      </>
    );
  }
}

function Parent() {
  console.log("Parent Render");
  const [txt, setTxt] = useState(520);
  const [n, setN] = useState(0);
  const handleClick = useMemo(() => {
    return () => {
      setTxt(txt + 1);
    };
  }, [txt]);
  return (
    <>
      {/* 函数的地址每次渲染都发生了变化，导致了子组件重新渲染，
      若子组件是经过优化的组件，则可能导致优化失败 */}
      <Test text={txt} onClick={handleClick} />
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
