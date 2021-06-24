import React from "react";
import MouseListener from "./MouseListener";

const renderPoint = (mouse) => (
  <>
    横坐标: {parseInt(mouse.x)}，纵坐标: {parseInt(mouse.y)}
  </>
);
const renderDiv = (mosue) => (
  <>
    <div
      style={{
        width: 100,
        height: 100,
        backgroundColor: "#008c8c",
        position: "absolute",
        left: mosue.x - 50,
        top: mosue.y - 50,
      }}
    ></div>
  </>
);

export default function Test() {
  return (
    <>
      <MouseListener render={renderPoint} />
      <MouseListener render={renderDiv} />
    </>
  );
}
