import React, { useState } from "react";
import usePageStudents from "./myHooks/usePageStudents";

function Test() {
  const [page, setPage] = useState(1);
  const resp = usePageStudents(page, 10);
  if (resp) {
    const list = resp.findByPage.map((it) => <li key={it.id}>{it.name}</li>);
    return (
      <>
        <h1>数据总数：{resp.cont}</h1>
        <ul>{list}</ul>
        <input
          type="number"
          value={page}
          onChange={(e) => setPage(e.target.value)}
        />
      </>
    );
  }
  return null;
}

export default function App() {
  return <Test />;
}
