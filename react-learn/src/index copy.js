import React from "react";
import ReactDOM from "react-dom";

const a = 1234,
  b = 4321;

// const obj = {
//   name: "zjc",
//   age: 20,
// };

const arr = [1, 0, undefined, null, false, true];

const numbers = new Array(30);
numbers.fill(0);

const lis = numbers.map((item, i) => <li key={i}>{i}</li>);

const o = React.createElement("div", {}, `${a} * ${b} = ${a * b}`);

console.log(o);

const div = (
  <div>
    {a} * {b} = {a * b}
    {/* 以下不会显示 */}
    <p>
      {null}
      {undefined}
      {false}
    </p>
    {/* 普通对象无法放置 */}
    {/* <p>{obj}</p> */}
    {/* React对象没问题 */}
    <p>{arr}</p>
    <ul>{lis}</ul>
  </div>
);

console.log(div);

ReactDOM.render(div, document.getElementById("root"));
