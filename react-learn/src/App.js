import React, { useState } from "react";

export default function App() {
  console.log("App render");
  const [n, setN] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          // setN(n - 1);
          // setN(n - 1);
          setN((prevN) => prevN - 1);
          setN((prevN) => prevN - 1);
          setN((prevN) => prevN - 1);
        }}
      >
        n - 1
      </button>
      <p>{n}</p>
      <button
        onClick={() => {
          setN(n + 1);
          setN(n + 1);
          setN(n + 1);
        }}
      >
        n + 1
      </button>
    </>
  );
}
