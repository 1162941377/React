import React from "react";

export default function Student({ name, age, sex }) {
  return (
    <li>
      【姓名】{name}
      【年龄】{age}
      【性别】{sex === 1 ? "男" : "女"}
    </li>
  );
}
