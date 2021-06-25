import React, { useState } from "react";

export default function App() {
  const [n, setN] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setN(n - 1);
        }}
      >
        -
      </button>
      <p>{n}</p>
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
