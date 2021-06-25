import React, { useState } from "react";

window.arr = [];

export default function App() {
  const [visible, setVisible] = useState(false);
  const [n, setN] = useState(0);
  window.arr.push(setN);
  return (
    <>
      <p
        style={{
          display: visible ? "block" : "none",
        }}
      >
        <button
          onClick={() => {
            setN(n - 1);
          }}
        >
          -
        </button>
        <span>{n}</span>
        <button
          onClick={() => {
            setN(n + 1);
          }}
        >
          +
        </button>
      </p>
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
