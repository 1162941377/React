import React from "react";
import ReactDOM from "react-dom";

const content = "<h1>h1标签</h1><p>p标签</p>";
const div = (
  <div
    dangerouslySetInnerHTML={{
      __html: content,
    }}
  ></div>
);

ReactDOM.render(div, document.getElementById("root"));
