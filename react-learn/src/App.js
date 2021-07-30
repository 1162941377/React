import React, { useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./App.css";
import "animate.css";

export default function App() {
  const [show1, setShow1] = useState(true);
  return (
    <div className="container">
      <SwitchTransition mode="out-in">
        <CSSTransition
          appear
          timeout={800}
          key={show1}
          classNames={{
            exit: "animate__bounceOut",
            enter: "animate__bounceIn",
          }}
        >
          <h1 className="animate_animated fast">
            {show1 ? "title1" : "title2"}
          </h1>
        </CSSTransition>
      </SwitchTransition>
      <button onClick={() => setShow1(!show1)}>切换状态</button>
    </div>
  );
}
