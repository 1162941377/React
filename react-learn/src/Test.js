import React from "react";

let prev;

export default function Test() {
  return (
    <div
      onClick={(e) => {
        console.log(prev === e);
        console.log("react: div被点击了");
      }}
    >
      <input
        type="text"
        onFocus={(e) => {
          console.log("react: input获得了焦点");
        }}
      />
      <button
        onClick={(e) => {
          console.log("react: button被点击了");
          prev = e;
          e.persist();
          setTimeout(() => {
            console.log(e.type);
          }, 1000);
        }}
      >click</button>
    </div>
  );
}

document.querySelector("#root").onfocus = function (e) {
  console.log("阻止focus事件冒泡");
  e.stopPropagation();
};
