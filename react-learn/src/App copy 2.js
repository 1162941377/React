import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./App.css";

function Cmp1({ visible }) {
  return (
    <CSSTransition appear mountOnEnter in={visible} timeout={1000}>
      <h1 className="title">组件1</h1>
    </CSSTransition>
  );
}

function Cmp2({ visible }) {
  return (
    <CSSTransition appear mountOnEnter in={visible} timeout={1000}>
      <h1 className="title">组件2</h1>
    </CSSTransition>
  );
}

export default function App() {
  const [showCmp1, setShowCmp1] = useState(true);
  return (
    <div className="container">
      <div className="cmp-container">
        <Cmp1 visible={showCmp1} />
        <Cmp2 visible={!showCmp1} />
      </div>
      <button onClick={() => setShowCmp1(!showCmp1)}>切换状态</button>
    </div>
  );
}
