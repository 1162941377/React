import React, { useState } from "react";

export default function App() {
  console.log("App render");
  const [, forceUpdate] = useState({});
  return (
    <p>
      <button
        onClick={() => {
          forceUpdate({});
        }}
      >
        强制刷新
      </button>
    </p>
  );
}
