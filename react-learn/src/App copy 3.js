import React, { useState } from "react";

export default function App() {
  console.log("App render");
  const [visible, setVisible] = useState(false);
  const [n, setN] = useState(0);
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
        show/hidden
      </button>
    </>
  );
}
