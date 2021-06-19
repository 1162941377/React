import React from "react";
import ReactDOM from "react-dom";
import Cmp from "./Cmp";

ReactDOM.render(
  <Cmp content1={<h2>第2组元素内容</h2>} content2={<h3>第三组元素内容</h3>}>
    <h1>第1组元素内容</h1>
  </Cmp>,
  document.getElementById("root")
);
