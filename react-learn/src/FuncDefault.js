import React from "react";

export default function FuncDefault(props) {
  console.log("已经完成了混合！");
  return (
    <>
      a: {props.a}， b: {props.b}， c: {props.c}
    </>
  );
}

FuncDefault.defaultProps = {
  a: 1,
  b: 2,
  c: 3,
};
