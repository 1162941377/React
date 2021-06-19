import React from "react";
import "./index.css";

export default function index(props) {
  const defaultProps = {
    // 默认属性
    bg: "rgba(0, 0, 0, 0.5)",
  };

  const datas = Object.assign({}, defaultProps, props); // 混合属性

  // console.log(datas);

  return (
    <div
      onClick={(e) => {
        if (e.target.className === "modal") {
          // console.log(e.target);
          datas.onClose();
        }
      }}
      className="modal"
      style={{
        backgroundColor: datas.bg,
      }}
    >
      <div className="modal-center">{datas.children}</div>
    </div>
  );
}
