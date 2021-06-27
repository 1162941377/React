import React, { useState, useEffect } from "react";

export default function App() {
  const [n, setN] = useState(0);
  // 以下代码属于副作用
  // document.title = `计时器：${n}`;
  useEffect(() => {
    console.log("执行了改变页面标题的副作用");
    document.title = `计时器：${n}`;
  });

  useEffect(() => {
    console.log("执行了其它的副作用");
  });

  return (
    <>
      <span>{n}</span>
      <button
        onClick={() => {
          setN(n + 1);
        }}
      >
        +
      </button>
    </>
  );
}
