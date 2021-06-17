import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const url =
  "https://th.bing.com/th/id/OIP.b7u6_mjiM2IOTyAnejIvbgHaNK?pid=ImgDet&rs=1";
const cls = "image";
const div = (
  <div>
    <img
      src={url}
      alt=""
      className={cls}
      style={{
        marginLeft: "50px",
        width: "200px",
      }}
    />
  </div>
);

ReactDOM.render(div, document.getElementById("root"));
