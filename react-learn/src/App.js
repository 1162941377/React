import React, { useState, useEffect, useDebugValue } from "react";

function useTest() {
  const [students] = useState([]);
  useDebugValue("学生集合");
  return students;
}

export default function App() {
  useState(0);
  useState("zjc");
  useEffect(() => {
    console.log("Effect");
  }, []);
  useTest();
  return <h1>Hello World!</h1>;
}
