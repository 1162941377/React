import React from "react";
import withMouseListener from "./withMouseListener";

function Point(props) {
  return (
    <>
      横坐标：{parseInt(props.x)}，纵坐标：{parseInt(props.y)}
    </>
  );
}

function MoveDiv(props) {
  return (
    <>
      <div
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#008c8c",
          position: "absolute",
          left: props.x - 50,
          top: props.y - 50,
        }}
      ></div>
    </>
  );
}

const MousePoint = withMouseListener(Point);
const MouseDiv = withMouseListener(MoveDiv);

export default function Test() {
  return (
    <>
      <MousePoint />
      <MouseDiv />
    </>
  );
}
