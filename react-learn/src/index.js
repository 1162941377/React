import React from "react";
import ReactDOM from "react-dom";

function handleClick(e) {
  console.log("点击了", e);
}

const btn = (
  <button
    onClick={handleClick}
    onMouseEnter={(e) => {
      console.log(e);
    }}
  >点我啊</button>
);

ReactDOM.render(btn, document.getElementById("root"));
