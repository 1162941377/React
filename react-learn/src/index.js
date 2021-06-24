import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

document.addEventListener(
  "click",
  (e) => {
    e.stopImmediatePropagation(); // 阻止剩余的事件处理程序运行
  },
  false
);

// 该事件无法执行，因为被阻止了
document.addEventListener(
  "click",
  (e) => {
    console.log("真实DOM: document被点击了");
  },
  false
);
