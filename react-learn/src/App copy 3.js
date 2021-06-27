import React, { useState, useEffect } from "react";

function Test() {
  useEffect(() => {
    console.log("副作用函数，仅在挂载时运行一次");
    return () => {
      console.log("清理函数，仅在卸载时运行一次");
    };
  }, []); // 使用空数组，则副作用函数仅在挂载阶段运行

  console.log("渲染组件");

  const [, forceUpdate] = useState({});

  return (
    <h1>
      Test组件
      <button
        onClick={() => {
          forceUpdate({});
        }}
      >
        刷新组件
      </button>
    </h1>
  );
}

export default function App() {
  const [visible, setVisible] = useState(true);
  return (
    <>
      {visible && <Test />}
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        显示/隐藏
      </button>
    </>
  );
}
