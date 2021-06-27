import React, { useState, useEffect } from "react";

export default function App() {
  const [n, setN] = useState(10);

  useEffect(() => {
    if (n === 0) {
      return;
    }

    // 第一次渲染后，需要根据当前的n值，1秒后重新渲染
    setTimeout(() => {
      setN(n - 1);
    }, 1000);
  }, [n]);

  return (
    <>
      <h1>{n}</h1>
      <button
        onClick={() => {
          setN(n + 1);
        }}
      >
        n + 1
      </button>
    </>
  );
}
