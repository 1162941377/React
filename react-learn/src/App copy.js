import React, { useState, useRef } from "react";

window.arr = [];

export default function App() {
  const inpRef = useRef();
  window.arr.push(inpRef);
  const [n, setN] = useState(0);
  return (
    <>
      <input type="text" ref={inpRef} />
      <br />
      <button
        onClick={() => {
          console.log(inpRef.current.value);
        }}
      >
        得到input的值
      </button>
      <br />
      <input type="number" value={n} onChange={(e) => setN(e.target.value)} />
    </>
  );
}
