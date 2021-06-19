import React from "react";

export default function Cmp(props) {
  console.log(props);

  return (
    <div className="cmp">
      <span>组件自身的内容</span>
      {props.content1}
      {props.content2}
      {props.children}
      {/* {props.children || "默认值"} */}
    </div>
  );
}
